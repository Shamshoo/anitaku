// online-streaming-provider.d.ts

declare interface Settings {
    episodeServers: string[];
    supportsDub: boolean;
}

declare interface SearchResult {
    id: string;
    title: string;
    url: string;
    image?: string;
    subOrDub: "sub" | "dub" | "both";
}

declare interface EpisodeDetails {
    id: string;
    number: number;
    title: string;
    url: string;
}

declare interface EpisodeSource {
    url: string;
    type: "mp4" | "m3u8" | "iframe";
    quality: string;
    subtitles: {
        url: string;
        lang: string;
    }[];
}

declare interface EpisodeServer {
    server: string;
    headers: Record<string, string>;
    videoSources: EpisodeSource[];
}

declare class Provider {
    api: string;
    ajaxUrl?: string;
    
    getSettings(): Settings;
    
    search(query: string): Promise<SearchResult[]>;
    
    findEpisodes(id: string): Promise<EpisodeDetails[]>;
    
    findEpisodeServer(episodeId: string, server?: string): Promise<EpisodeServer>;
}
