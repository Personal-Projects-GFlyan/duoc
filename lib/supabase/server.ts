import { createServerClient } from "@supabase/ssr";
import { SupabaseClient } from "@supabase/supabase-js";

import { cookies } from "next/headers";

/**
 * Especially important if using Fluid compute: Don't put this client in a
 * global variable. Always create a new client within each function when using
 * it.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have proxy refreshing
            // user sessions.
          }
        },
      },
    },
  );
}

type Service = {
    id: number,
    nome: string,
    descricao: string,
    urlimagem: string;
    escopo: string[];
}

export async function   getServices_ScopeLimitedBy3(): Promise<Service[]> {
  try {
    const supabase = await createClient();
    const {data, error} = await supabase.rpc("getservices_scopelimitedby3");
    return data;
  } catch(error) {
    throw error;
  }
}

type ServiceInfos = {
    nome: string,
    descricao: string,
    escopo: string[],
    diferencial: string[],
    beneficio: string[];
}

export async function getServiceInfosById(id: number): Promise<ServiceInfos> {
  try {
    const supabase = await createClient();
    const {data, error} = await supabase.rpc("getserviceinfosbyid", {serviceid: id}).single();
    return data as ServiceInfos;
  } catch(error) {
    throw error;
  }
}

export async function getOtherServices_LimitedBy2(id: number): Promise<Service[]> {
  try {
    const supabase = await createClient();
    const {data: services, error} = await supabase.from("servico").select("id").neq("id", id).limit(2);
    if(services == null) return [];
    const allServices = await getServices_ScopeLimitedBy3();
    const filteredServices = [];

    for(const service of allServices) {
        if(service.id === services[0]?.id || service.id === services[1]?.id){
          filteredServices.push(service);
        }
      }

    return filteredServices as Service[];
  } catch(error) {
    throw error;
  }
}

type ProjectCard = {
  id: number,
  nome: string,
  localizacao: string,
  urlimagem: string,
  altimagem: string;
}

export async function getProjectsByServiceId_LimitedBy2(id: number): Promise<ProjectCard[]> {
  try{
    const supabase = await createClient();
    const {data: projectIds, error} = await supabase.from("servico_projeto").select("idprojeto").eq("idservico", id).limit(2);
    if(projectIds == null) return [];

    const projects: ProjectCard[] = [];

    for(const projectId of projectIds) {
      const {data: project, error: firstError} = await supabase.from("projeto").select("id, nome, localizacao").eq("id", projectId.idprojeto).single();
      if(project == null || firstError) continue;
      const {data: projectImg, error: secondError} = await supabase.from("imagem_projeto").select("url, alt").match({"idprojeto": projectId.idprojeto, "pos": 1}).single();
      if(projectImg == null || secondError) continue;
      projects.push({
        id: project.id,
        nome: project.nome,
        localizacao: project.localizacao,
        urlimagem: projectImg.url,
        altimagem: projectImg.alt
      });
    }

    return projects;
  } catch(error) {
    throw error;
  } 
}

export async function getProjectsInfos_LimitedBy6(): Promise<ProjectCard[]> {
  try{
    const supabase = await createClient();
    const {data: projectsData, error} = await supabase.from("projeto").select("id, nome, localizacao").limit(6);
    if(projectsData == null) return [];
    const projects: ProjectCard[] = [];
    for(const project of projectsData) { 
      const {data: projectImg, error} = await supabase.from("imagem_projeto").select("url, alt").match({"idprojeto": project.id, "pos": 1}).single();
      if(projectImg == null) return[];
      projects.push({
        id: project.id,
        nome: project.nome,
        localizacao: project.localizacao,
        urlimagem: projectImg.url,
        altimagem: projectImg.alt
      });
    }

    return projects;
  } catch(error) {
    throw error;
  } 
}

type ProjectInfo = {
  nome: string,
  descricao: string,
  localizacao: string,
  ano: number,
  duracao: string,
  info_imagem: {alt: string, pos: number, url: string}[];
}

export async function getProjectInfo(id: number): Promise<ProjectInfo> {
  try{
    const supabase = await createClient();
    const {data, error} = await supabase.rpc("getprojectinfos", {projectid: id}).single();
    return data as ProjectInfo;
  } catch(error) {
    throw error;
  } 
}

export async function getOtherProjectsInfos_LimitedBy3(projectId: number): Promise<ProjectCard[]> {
  try{
    const supabase = await createClient();
    const {data: projectsData, error} = await supabase.from("projeto").select("id, nome, localizacao").neq("id", projectId).limit(3);
    if(projectsData == null) return [];
    const projects: ProjectCard[] = [];
    for(const project of projectsData) { 
      const {data: projectImg, error} = await supabase.from("imagem_projeto").select("url, alt").match({"idprojeto": project.id, "pos": 1}).single();
      if(projectImg == null) return[];
      projects.push({
        id: project.id,
        nome: project.nome,
        localizacao: project.localizacao,
        urlimagem: projectImg.url,
        altimagem: projectImg.alt
      });
    }
    return projects;
  } catch(error) {
    throw error;
  } 
}

type S_P_InProgress = {
  id: number
  nome: string,
  projects: ProjectCard[];
}

export async function getAllProjectsInProgress(): Promise<ProjectCard[]> {
  try{
    const supabase = await createClient();
    const {data, error} = await supabase.from("v_allprojectsinprogress").select("*");

    return data as ProjectCard[];
  } catch(error) {
    throw error;
  } 
}

export async function getServicesAndProjectsInProgress(): Promise<S_P_InProgress[]> {
  try{
    const supabase = await createClient();
    const {data, error} = await supabase.from("v_servicesandprojectsinprogress").select("*");

    return data as S_P_InProgress[];
  } catch(error) {
    throw error;
  } 
}
