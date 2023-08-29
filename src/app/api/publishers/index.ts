import { API_URL } from "@/utils";
import axios from "axios";

export const getPodcasts = async (page = 1, perPage = 10) => axios.get(`${API_URL}/publishers/podcasts?page=${page}&per_page=${perPage}`);
export const getPodcastsById = async (id: number | string) => axios.get(`${API_URL}/publishers/podcasts/${id}`);
export const getPodcastEpisodes = async (id: number | string, page = 1, perPage = 10) => axios.get(`${API_URL}/publishers/podcasts/${id}/episodes?page=${page}&per_page=${perPage}`);
export const getPodcastEpisode = async (podcastId: number | string, episodeId: number | string) => axios.get(`${API_URL}/publishers/podcasts/${podcastId}/episodes/${episodeId}`);
export const subscribeToPlan = async (id: number | string) => axios.post(`${API_URL}/publishers/plans/${id}/subscriptions`);
export const updateWebsiteSettings = async (data: any) => axios.post(`${API_URL}/publishers/settings/website-page`, data);


export const createPodcast = async (data: any) => axios.post(`${API_URL}/publishers/podcasts`, data, {
    headers: {
        "Content-Type": "multipart/form-data",
    }
});

export const updatePodcast = async (podcastId: string, data: any) => axios.post(`${API_URL}/publishers/podcasts/${podcastId}`, data, {
    headers: {
        "Content-Type": "multipart/form-data",
    }
});

export const uploadEpisode = async (podcastId: string, data: any) => axios.post(`${API_URL}/publishers/podcasts/${podcastId}/episodes`, data, {
    headers: {
        "Content-Type": "multipart/form-data",
    }
});
export const uploadEpisodeAudio = async (podcastId: string, episodeId: string, data: any) => axios.post(`${API_URL}/publishers/podcasts/${podcastId}/episodes/${episodeId}/audio`, data, {
    headers: {
        "Content-Type": "multipart/form-data",
    }
});
export const updateEpisode = async (podcastId: string, episodeId: string | number, data: any) => axios.post(`${API_URL}/publishers/podcasts/${podcastId}/episodes/${episodeId}`, data, {
    headers: {
        "Content-Type": "multipart/form-data",
    }
});
export const archiveEpisode = async (podcastId: string | number, episodeId: string | number) => axios.post(`${API_URL}/publishers/podcasts/${podcastId}/episodes/${episodeId}/archives`);
export const initiatePodcastImport = async (url: string) => axios.post(`${API_URL}/publishers/podcasts/import/verification`, { url });
export const importPodcast = async (url: string, otp: string) => axios.post(`${API_URL}/publishers/podcasts/import`, { url, otp });


export const updatePodcastGoals = async (data: any) => axios.put(`${API_URL}/publishers/profile/podcast-goals`, data);