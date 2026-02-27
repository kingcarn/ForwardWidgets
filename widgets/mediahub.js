WidgetMetadata = {
    id: "kingcarn's test plugin",
    title: "kingcarn's FWD module",
    author: "kingcarn",
    description: "增加全平台和时间排序",
    version: "1.3.6", // 升级版本号
    requiredVersion: "0.0.1",
    site: "https://github.com/kingcarn",
    // 1. 全局参数 (仅剩 Trakt ID，且选填)
    globalParams: [
        {
            name: "traktClientId",
            title: "Trakt Client ID",
            type: "input",
            description: "选填，不填则使用内置。Trakt 榜单专用。",
            value: ""
        }
    ],

    modules: [
        {
            title: "🔥 全球热榜聚合",
            functionName: "loadTrendHub",
            type: "video", // 改为 video 以支持更好的海报排版
            cacheDuration: 3600,
            params: [
                {
                    name: "source",
                    title: "选择榜单",
                    type: "enumeration",
                    value: "trakt_trending",
                    enumOptions: [
                        { title: "🌍 Trakt - 实时热播", value: "trakt_trending" },
                        { title: "🌍 Trakt - 最受欢迎", value: "trakt_popular" },
                        { title: "🌍 Trakt - 最受期待", value: "trakt_anticipated" },
                        { title: "🇨🇳 豆瓣 - 热门国产剧", value: "db_tv_cn" },
                        { title: "🇨🇳 豆瓣 - 热门综艺", value: "db_variety" },
                        { title: "🇨🇳 豆瓣 - 热门电影", value: "db_movie" },
                        { title: "🇺🇸 豆瓣 - 热门美剧", value: "db_tv_us" },
                        { title: "📺 B站 - 番剧热播", value: "bili_bgm" },
                        { title: "📺 B站 - 国创热播", value: "bili_cn" },
                        { title: "🌸 Bangumi - 每日放送", value: "bgm_daily" }
                    ]
                },
                {
                    name: "traktType",
                    title: "Trakt 类型",
                    type: "enumeration",
                    value: "all", 
                    belongTo: { paramName: "source", value: ["trakt_trending", "trakt_popular", "trakt_anticipated"] },
                    enumOptions: [
                        { title: "全部 (剧集+电影)", value: "all" }, 
                        { title: "剧集", value: "shows" },
                        { title: "电影", value: "movies" }
                    ]
                },
                { name: "page", title: "页码", type: "page" }
            ]
        },
        {
            title: "📺 平台分流片库",
            functionName: "loadPlatformMatrix",
            type: "video",
            cacheDuration: 3600,
            params: [
                {
                    name: "platformId",
                    title: "播出平台",
                    type: "enumeration",
                    value: "all",
                    enumOptions: [
                        { title: "🌐 全部平台", value: "all" },
                        { title: "腾讯视频", value: "2007" },
                        { title: "爱奇艺", value: "1330" },
                        { title: "优酷", value: "1419" },
                        { title: "芒果TV", value: "1631" },
                        { title: "Bilibili", value: "1605" },
                        { title: "Netflix", value: "213" },
                        { title: "Disney+", value: "2739" },
                        { title: "HBO", value: "49" },
                        { title: "Apple TV+", value: "2552" }
                    ]
                },
                {
                    name: "region",
                    title: "地区筛选",
                    type: "enumeration",
                    value: "all",
                    enumOptions: [
                        { title: "🌍 全部地区", value: "all" },
                        { title: "🇨🇳 华语地区", value: "chinese" },
                        { title: "🇺🇸 欧美地区", value: "western" },
                        { title: "🇰🇷 韩国", value: "korean" },
                        { title: "🇯🇵 日本", value: "japanese" },
                        { title: "🇮🇳 印度", value: "indian" },
                        { title: "🇭🇰 香港", value: "hongkong" },
                        { title: "🌏 其他地区", value: "other" }
                    ]
                },
                {
                    name: "genre",
                    title: "类别筛选",
                    type: "enumeration",
                    value: "all",
                    enumOptions: [
                        { title: "🎬 全部类别", value: "all" },
                        { title: "🔥 动作", value: "28" },
                        { title: "🏔️ 冒险", value: "12" },
                        { title: "🎨 动画", value: "16" },
                        { title: "😄 喜剧", value: "35" },
                        { title: "🔫 犯罪", value: "80" },
                        { title: "📽️ 纪录片", value: "99" },
                        { title: "📖 剧情", value: "18" },
                        { title: "👨‍👩‍👧‍👦 家庭", value: "10751" },
                        { title: "🧙 奇幻", value: "14" },
                        { title: "📜 历史", value: "36" },
                        { title: "👻 恐怖", value: "27" },
                        { title: "🎵 音乐", value: "10402" },
                        { title: "🔍 悬疑", value: "9648" },
                        { title: "💕 爱情", value: "10749" },
                        { title: "🤖 科幻", value: "878" },
                        { title: "📺 电视电影", value: "10770" },
                        { title: "😱 惊悚", value: "53" },
                        { title: "⚔️ 战争", value: "10752" },
                        { title: "🤠 西部", value: "37" },
                        { title: "⚡ 动作冒险", value: "10759" },
                        { title: "🧸 儿童", value: "10762" },
                        { title: "📰 新闻", value: "10763" },
                        { title: "🎭 真人秀", value: "10764" },
                        { title: "🚀 科幻奇幻", value: "10765" },
                        { title: "💧 肥皂剧", value: "10766" },
                        { title: "💬 脱口秀", value: "10767" },
                        { title: "🏛️ 战争政治", value: "10768" }
                    ]
                },
                {
                    name: "category",
                    title: "内容分类",
                    type: "enumeration",
                    value: "tv_drama",
                    enumOptions: [
                        { title: "📺 电视剧", value: "tv_drama" },
                        { title: "🎤 综艺", value: "tv_variety" },
                        { title: "🐲 动漫", value: "tv_anime" },
                        { title: "🎬 电影", value: "movie" } 
                    ]
                },
                {
                    name: "sort_by",
                    title: "排序",
                    type: "enumeration",
                    value: "popularity.desc",
                    enumOptions: [
                        { title: "🔥 热度最高", value: "popularity.desc" },
                        { title: "⭐ 评分最高", value: "vote_average.desc" },
                        { title: "📅 最新首播", value: "first_air_date.desc" },
                        { title: "📅 最早首播", value: "first_air_date.asc" },
                        { title: "📅 发行时间倒序", value: "release_date.desc" },
                        { title: "📅 发行时间正序", value: "release_date.asc" }
                    ]
                },
                { name: "page", title: "页码", type: "page" }
            ]
        }
    ]
};

// --- 更新：全新的内置 Trakt Client ID ---
const DEFAULT_TRAKT_ID = "95b59922670c84040db3632c7aac6f33704f6ffe5cbf3113a056e37cb45cb482";

// 地区映射配置
const REGION_CONFIG = {
    chinese: {
        name: "华语地区",
        languages: ["zh", "zh-CN", "zh-TW", "zh-HK"],
        countries: ["CN", "TW", "HK"],
        excludeCountries: []
    },
    western: {
        name: "欧美地区",
        languages: ["en", "es", "fr", "de", "it", "pt"],
        countries: ["US", "GB", "CA", "AU", "FR", "DE", "IT", "ES", "PT"],
        excludeCountries: []
    },
    korean: {
        name: "韩国",
        languages: ["ko"],
        countries: ["KR"],
        excludeCountries: []
    },
    japanese: {
        name: "日本",
        languages: ["ja"],
        countries: ["JP"],
        excludeCountries: []
    },
    indian: {
        name: "印度",
        languages: ["hi", "ta", "te", "ml", "bn", "pa"],
        countries: ["IN"],
        excludeCountries: []
    },
    hongkong: {
        name: "香港",
        languages: ["zh-HK", "zh-TW", "yue"],
        countries: ["HK"],
        excludeCountries: []
    },
    other: {
        name: "其他地区",
        languages: [],
        countries: [],
        excludeCountries: ["CN", "TW", "HK", "US", "GB", "CA", "AU", "FR", "DE", "IT", "ES", "PT", "KR", "JP", "IN"]
    }
};

const GENRE_MAP = {
    28: "动作", 12: "冒险", 16: "动画", 35: "喜剧", 80: "犯罪", 99: "纪录片",
    18: "剧情", 10751: "家庭", 14: "奇幻", 36: "历史", 27: "恐怖", 10402: "音乐",
    9648: "悬疑", 10749: "爱情", 878: "科幻", 10770: "电视电影", 53: "惊悚",
    10752: "战争", 37: "西部", 10759: "动作冒险", 10762: "儿童", 10763: "新闻",
    10764: "真人秀", 10765: "科幻奇幻", 10766: "肥皂剧", 10767: "脱口秀", 10768: "战争政治"
};

// 反向映射，用于获取类别ID
const GENRE_NAME_TO_ID = {
    "动作": 28, "冒险": 12, "动画": 16, "喜剧": 35, "犯罪": 80, "纪录片": 99,
    "剧情": 18, "家庭": 10751, "奇幻": 14, "历史": 36, "恐怖": 27, "音乐": 10402,
    "悬疑": 9648, "爱情": 10749, "科幻": 878, "电视电影": 10770, "惊悚": 53,
    "战争": 10752, "西部": 37, "动作冒险": 10759, "儿童": 10762, "新闻": 10763,
    "真人秀": 10764, "科幻奇幻": 10765, "肥皂剧": 10766, "脱口秀": 10767, "战争政治": 10768
};

function getGenreText(ids) {
    if (!ids || !Array.isArray(ids)) return "";
    return ids.map(id => GENRE_MAP[id]).filter(Boolean).slice(0, 3).join(" / ");
}

// --- 适配 Video 横竖版的 buildItem 函数 ---
function buildItem({ id, tmdbId, type, title, date, poster, backdrop, rating, genreText, subTitle, desc }) {
    // 【修复点1】将评分/日期信息和剧情简介拼接在一起，用 \n 换行
    const baseInfo = date ? `${date} · ${subTitle || '⭐ ' + rating}` : (subTitle || `⭐ ${rating}`);
    const overview = desc ? `\n${desc}` : "\n暂无简介";

    return {
        id: String(id),
        tmdbId: parseInt(tmdbId),
        type: "tmdb",
        mediaType: type,
        title: title,
        
        // 横版：只保留流派和类型
        genreTitle: genreText || (type === "tv" ? "剧集" : "电影"), 
        
        // 竖版：展示 评分+日期 \n 剧情简介
        description: baseInfo + overview,
        
        // 传递给内核提取横版年份
        releaseDate: date,
        
        posterPath: poster ? `https://image.tmdb.org/t/p/w500${poster}` : "",
        backdropPath: backdrop ? `https://image.tmdb.org/t/p/w780${backdrop}` : "",
        rating: parseFloat(rating) || 0,
        subTitle: subTitle // 备用保留
    };
}

// =========================================================================
// 1. 业务逻辑
// =========================================================================

async function loadTrendHub(params = {}) {
    const { source, traktType = "all" } = params;
    const page = params.page || 1; 
    const traktClientId = params.traktClientId || DEFAULT_TRAKT_ID;

    // --- Trakt (支持混合模式) ---
    if (source.startsWith("trakt_")) {
        const listType = source.replace("trakt_", ""); 
        let rawData = [];

        // 1. 混合模式 (All)
        if (traktType === "all") {
            const [movies, shows] = await Promise.all([
                fetchTraktData("movies", listType, traktClientId, page),
                fetchTraktData("shows", listType, traktClientId, page)
            ]);
            rawData = [...movies, ...shows];
            
            rawData.sort((a, b) => {
                const valA = a.watchers || a.list_count || 0;
                const valB = b.watchers || b.list_count || 0;
                if (valA === 0 && valB === 0) return 0;
                return valB - valA; // 降序
            });
            
        } else {
            // 单一模式
            rawData = await fetchTraktData(traktType, listType, traktClientId, page);
        }
        
        if (!rawData || rawData.length === 0) return page === 1 ? await fetchTmdbFallback(traktType === "all" ? "movie" : traktType) : [];

        // 2. 处理数据
        const promises = rawData.slice(0, 20).map(async (item, index) => {
            let subject = item.show || item.movie || item;
            const mediaType = item.show ? "tv" : "movie";
            
            let rank = (page - 1) * 15 + index + 1;
            let stats = "";
            
            if (listType === "trending") stats = `🔥 ${item.watchers || 0} 人在看`;
            else if (listType === "anticipated") stats = `❤️ ${item.list_count || 0} 人想看`;
            else stats = `No. ${rank}`; // Popular

            if (traktType === "all") {
                stats = `[${mediaType === "tv" ? "剧" : "影"}] ${stats}`;
            }

            if (!subject || !subject.ids || !subject.ids.tmdb) return null;
            return await fetchTmdbDetail(subject.ids.tmdb, mediaType, stats, subject.title);
        });
        return (await Promise.all(promises)).filter(Boolean);
    }

    // --- Douban (保持不变) ---
    if (source.startsWith("db_")) {
        let tag = "热门", type = "tv";
        if (source === "db_tv_cn") { tag = "国产剧"; type = "tv"; }
        else if (source === "db_variety") { tag = "综艺"; type = "tv"; }
        else if (source === "db_movie") { tag = "热门"; type = "movie"; }
        else if (source === "db_tv_us") { tag = "美剧"; type = "tv"; }
        return await fetchDoubanAndMap(tag, type, page);
    }

    // --- Bilibili / Bangumi (保持不变) ---
    if (source.startsWith("bili_")) {
        const type = source === "bili_cn" ? 4 : 1; 
        return await fetchBilibiliRank(type, page);
    }
    if (source === "bgm_daily") {
        if (page > 1) return [];
        return await fetchBangumiDaily();
    }
}

async function loadPlatformMatrix(params = {}) {
    const { platformId, region = "all", genre = "all", category = "tv_drama", sort = "popularity.desc" } = params;
    const page = params.page || 1;

    // 如果选择了全部平台，需要分别获取数据
    if (platformId === "all") {
        return await fetchAllPlatformsData(category, region, genre, sort, page);
    }

    const foreignPlatforms = ["213", "2739", "49", "2552"];
    if (category === "movie" && !foreignPlatforms.includes(platformId)) {
        return page === 1 ? [{ id: "empty", type: "text", title: "暂不支持国内平台电影", description: "请切换为剧集或国外平台" }] : [];
    }

    const queryParams = {
        language: "zh-CN",
        sort_by: sort,
        page: page,
        include_adult: false,
        include_null_first_air_dates: false
    };

    // 添加类别筛选
    addGenreFilter(queryParams, genre, category);
    
    // 添加地区筛选
    addRegionFilter(queryParams, region, category);

    if (category.startsWith("tv_")) {
        queryParams.with_networks = platformId;
        if (category === "tv_anime") {
            // 动漫类别已经通过with_genres筛选，这里不需要额外添加
            queryParams.with_genres = genre !== "all" ? genre : "16";
        } else if (category === "tv_variety") {
            queryParams.with_genres = genre !== "all" ? genre : "10764|10767";
        } else if (category === "tv_drama") {
            queryParams.without_genres = "16,10764,10767";
            if (genre !== "all") {
                queryParams.with_genres = genre;
            }
        }
        
        return await fetchTmdbDiscover("tv", queryParams);

    } else if (category === "movie") {
        const usMap = { "213":"8", "2739":"337", "49":"1899|15", "2552":"350" };
        queryParams.watch_region = "US";
        queryParams.with_watch_providers = usMap[platformId];
        
        if (genre !== "all") {
            queryParams.with_genres = genre;
        }
        
        return await fetchTmdbDiscover("movie", queryParams);
    }
}

// =========================================================================
// 2. 数据获取 (Helpers)
// =========================================================================

// 新增：添加类别筛选参数
function addGenreFilter(queryParams, genre, mediaType) {
    if (genre === "all") return;
    
    // 根据媒体类型调整类别筛选
    if (mediaType.startsWith("tv_")) {
        // 对于电视剧，某些类别可能需要特殊处理
        const tvSpecificGenres = ["16", "10764", "10767"]; // 动画、真人秀、脱口秀
        if (tvSpecificGenres.includes(genre)) {
            // 这些类别已经在category中处理，这里不需要重复添加
            return;
        }
    }
    
    queryParams.with_genres = genre;
}

// 新增：添加地区筛选参数
function addRegionFilter(queryParams, region, mediaType) {
    if (region === "all") return;

    const config = REGION_CONFIG[region];
    if (!config) return;

    if (config.languages && config.languages.length > 0) {
        // TMDB 使用 with_original_language 进行原始语言筛选
        queryParams.with_original_language = config.languages[0]; // TMDB 只支持单一语言
    }

    // 对于"其他地区"，需要排除特定国家的作品
    if (region === "other" && config.excludeCountries.length > 0) {
        // 添加一个标记，用于后续过滤
        queryParams._region_filter = "other";
    }
}

// 新增：根据地区过滤结果
function filterByRegion(items, region) {
    if (region === "all") return items;

    const config = REGION_CONFIG[region];
    if (!config) return items;

    return items.filter(item => {
        // 这里需要根据实际数据中的信息进行过滤
        // 由于 TMDB 返回的数据中可能没有完整的地区信息，我们主要依赖原始语言筛选
        return true; // 暂时返回所有，因为已经在 API 层面做了语言筛选
    });
}

// 新增：根据类别过滤结果
function filterByGenre(items, genre) {
    if (genre === "all") return items;
    
    return items.filter(item => {
        // 如果item有genre_ids字段，可以直接过滤
        if (item.genre_ids && Array.isArray(item.genre_ids)) {
            return item.genre_ids.includes(parseInt(genre));
        }
        return true; // 如果没有genre_ids，暂时保留
    });
}

// 修改：获取所有平台的数据，增加类别参数
async function fetchAllPlatformsData(category, region, genre, sort, page) {
    // 所有平台的ID列表
    const allPlatforms = ["2007", "1330", "1419", "1631", "1605", "213", "2739", "49", "2552"];
    const foreignPlatforms = ["213", "2739", "49", "2552"];
    const chinesePlatforms = ["2007", "1330", "1419", "1631", "1605"];
    
    // 根据地区筛选决定使用哪些平台
    let platformsToFetch = [];
    
    if (region === "chinese" || region === "hongkong") {
        // 华语地区和香港主要使用国内平台
        platformsToFetch = chinesePlatforms;
    } else if (region === "western" || region === "korean" || region === "japanese" || region === "indian") {
        // 这些地区主要使用国外平台
        platformsToFetch = foreignPlatforms;
    } else {
        // 全部地区或其他地区，使用所有平台
        platformsToFetch = category === "movie" ? foreignPlatforms : allPlatforms;
    }
    
    try {
        // 并行获取所有平台的数据
        const promises = platformsToFetch.map(async platformId => {
            const queryParams = {
                language: "zh-CN",
                sort_by: sort,
                page: page,
                include_adult: false,
                include_null_first_air_dates: false
            };

            // 添加类别筛选
            addGenreFilter(queryParams, genre, category);
            
            // 添加地区筛选
            addRegionFilter(queryParams, region, category);

            if (category.startsWith("tv_")) {
                queryParams.with_networks = platformId;
                if (category === "tv_anime") {
                    queryParams.with_genres = genre !== "all" ? genre : "16";
                } else if (category === "tv_variety") {
                    queryParams.with_genres = genre !== "all" ? genre : "10764|10767";
                } else if (category === "tv_drama") {
                    queryParams.without_genres = "16,10764,10767";
                    if (genre !== "all") {
                        queryParams.with_genres = genre;
                    }
                }
                
                return await fetchTmdbDiscoverRaw("tv", queryParams);
            } else if (category === "movie") {
                const usMap = { "213":"8", "2739":"337", "49":"1899|15", "2552":"350" };
                queryParams.watch_region = "US";
                queryParams.with_watch_providers = usMap[platformId];
                
                if (genre !== "all") {
                    queryParams.with_genres = genre;
                }
                
                return await fetchTmdbDiscoverRaw("movie", queryParams);
            }
            return [];
        });

        const results = await Promise.all(promises);
        
        // 合并所有结果
        let allItems = [];
        results.forEach(items => {
            if (items && items.length > 0) {
                allItems = allItems.concat(items);
            }
        });

        // 应用地区过滤
        allItems = filterByRegion(allItems, region);
        
        // 应用类别过滤（补充过滤，确保准确性）
        allItems = filterByGenre(allItems, genre);

        // 去重（基于tmdbId）
        const uniqueItems = [];
        const seenIds = new Set();
        
        allItems.forEach(item => {
            if (!seenIds.has(item.tmdbId)) {
                seenIds.add(item.tmdbId);
                uniqueItems.push(item);
            }
        });

        // 根据排序参数重新排序
        uniqueItems.sort((a, b) => {
            if (sort.includes("popularity")) {
                return (b.rating || 0) - (a.rating || 0);
            } else if (sort.includes("vote_average")) {
                return (b.rating || 0) - (a.rating || 0);
            } else if (sort.includes("first_air_date") || sort.includes("release_date")) {
                const dateA = a.releaseDate || "";
                const dateB = b.releaseDate || "";
                if (sort.endsWith(".desc")) {
                    return dateB.localeCompare(dateA);
                } else {
                    return dateA.localeCompare(dateB);
                }
            }
            return 0;
        });

        return uniqueItems.slice(0, 50); // 限制返回数量

    } catch (e) {
        console.error("获取所有平台数据失败:", e);
        return [{ id: "err", type: "text", title: "加载失败" }];
    }
}

// 新增：原始数据获取，不进行buildItem处理
async function fetchTmdbDiscoverRaw(mediaType, params) {
    try {
        const res = await Widget.tmdb.get(`/discover/${mediaType}`, { params });
        const data = res || {};
        if (!data.results || data.results.length === 0) return [];
        
        return data.results.map(item => {
            const date = item.first_air_date || item.release_date || "";
            const genreText = getGenreText(item.genre_ids);
            
            return buildItem({
                id: item.id,
                tmdbId: item.id,
                type: mediaType,
                title: item.name || item.title,
                date: date,
                poster: item.poster_path,
                backdrop: item.backdrop_path,
                rating: item.vote_average?.toFixed(1) || "0.0",
                genreText: genreText,
                subTitle: `⭐ ${item.vote_average?.toFixed(1)}`,
                desc: item.overview
            });
        });
    } catch (e) { 
        return []; 
    }
}

async function fetchTmdbDiscover(mediaType, params) {
    try {
        const res = await Widget.tmdb.get(`/discover/${mediaType}`, { params });
        const data = res || {};
        if (!data.results || data.results.length === 0) return params.page === 1 ? [{ id: "empty", type: "text", title: "暂无数据" }] : [];
        
        return data.results.map(item => {
            const date = item.first_air_date || item.release_date || "";
            const genreText = getGenreText(item.genre_ids);
            
            return buildItem({
                id: item.id,
                tmdbId: item.id,
                type: mediaType,
                title: item.name || item.title,
                date: date,
                poster: item.poster_path,
                backdrop: item.backdrop_path,
                rating: item.vote_average?.toFixed(1) || "0.0",
                genreText: genreText,
                subTitle: `⭐ ${item.vote_average?.toFixed(1)}`,
                desc: item.overview
            });
        });
    } catch (e) { return [{ id: "err", type: "text", title: "加载失败" }]; }
}

async function fetchTmdbDetail(id, type, stats, title) {
    try {
        const d = await Widget.tmdb.get(`/${type}/${id}`, { params: { language: "zh-CN" } });
        const date = d.first_air_date || d.release_date || "";
        const genreText = (d.genres || []).map(g => g.name).slice(0, 3).join(" / ");
        
        return buildItem({
            id: d.id,
            tmdbId: d.id,
            type: type,
            title: d.name || d.title || title,
            date: date,
            poster: d.poster_path,
            backdrop: d.backdrop_path,
            rating: d.vote_average?.toFixed(1),
            genreText: genreText,
            subTitle: stats,
            desc: d.overview
        });
    } catch (e) { return null; }
}

async function searchTmdb(query, type) {
    const q = query.replace(/第[一二三四五六七八九十\d]+[季章]/g, "").trim();
    try {
        const res = await Widget.tmdb.get(`/search/${type}`, { 
            params: { query: encodeURIComponent(q), language: "zh-CN" } 
        });
        return (res.results || [])[0];
    } catch (e) { return null; }
}

// --- 更新：支持混合平台数据的排版融合 ---
function mergeTmdb(target, source) {
    target.id = String(source.id);
    target.tmdbId = source.id;
    target.posterPath = source.poster_path ? `https://image.tmdb.org/t/p/w500${source.poster_path}` : target.posterPath;
    target.backdropPath = source.backdrop_path ? `https://image.tmdb.org/t/p/w780${source.backdrop_path}` : "";
    
    const date = source.first_air_date || source.release_date || "";
    const genreText = getGenreText(source.genre_ids);
    
    target.genreTitle = genreText || (target.mediaType === "tv" ? "剧集" : "电影");
    target.releaseDate = date;
    
    // 【修复点2】合并数据时，也要把 TMDB 查到的 overview 剧情拼接到末尾
    const baseInfo = date ? `${date} · ${target.subTitle}` : target.subTitle;
    const overview = source.overview ? `\n${source.overview}` : "\n暂无简介";
    target.description = baseInfo + overview;
    
    target.rating = source.vote_average ? parseFloat(source.vote_average) : 0;
}

// =========================================================================
// 第三方源
// =========================================================================

async function fetchTraktData(type, list, id, page) {
    try {
        const res = await Widget.http.get(`https://api.trakt.tv/${type}/${list}?limit=15&page=${page}`, {
            headers: { "Content-Type": "application/json", "trakt-api-version": "2", "trakt-api-key": id }
        });
        return res.data || [];
    } catch (e) { return []; }
}

async function fetchDoubanAndMap(tag, type, page) {
    const start = (page - 1) * 20;
    try {
        const res = await Widget.http.get(`https://movie.douban.com/j/search_subjects?type=${type}&tag=${encodeURIComponent(tag)}&sort=recommend&page_limit=20&page_start=${start}`, {
            headers: { "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15" }
        });
        const list = (res.data || {}).subjects || [];
        if (list.length === 0) return page === 1 ? [{ id: "empty", type: "text", title: "暂无数据" }] : [];
        
        const promises = list.map(async (item, i) => {
            // 【修复点3】兜底 description，防止没搜到 TMDB 数据时没有简介占位
            let finalItem = { 
                id: `db_${item.id}`, type: "tmdb", mediaType: type, 
                title: item.title, 
                subTitle: `豆瓣🫛 ${item.rate}`, 
                description: `豆瓣 ${item.rate}\n暂无简介`, // 预设的占位格式
                genreTitle: type === "tv" ? "剧集" : "电影",
                posterPath: item.cover 
            };
            const tmdb = await searchTmdb(item.title, type);
            if (tmdb) mergeTmdb(finalItem, tmdb); 
            return finalItem;
        });
        return await Promise.all(promises);
    } catch (e) { return [{ id: "err", type: "text", title: "豆瓣连接失败" }]; }
}

async function fetchBilibiliRank(type, page) {
    try {
        const res = await Widget.http.get(`https://api.bilibili.com/pgc/web/rank/list?day=3&season_type=${type}`);
        const allList = (res.data?.result?.list || res.data?.data?.list || []);
        
        const pageSize = 15;
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        
        if (start >= allList.length) return [];
        const list = allList.slice(start, end);
        
        const promises = list.map(async (item, i) => {
            const rank = start + i + 1;
            // 【修复点3】兜底 description
            let finalItem = { 
                id: `bili_${rank}`, type: "tmdb", mediaType: "tv", 
                title: item.title, 
                subTitle: item.new_ep?.index_show || "热播中", 
                description: `${item.new_ep?.index_show || "热播中"}\n暂无简介`, // 预设的占位格式
                genreTitle: "剧集",
                posterPath: item.cover 
            };
            const tmdb = await searchTmdb(item.title, "tv");
            if (tmdb) mergeTmdb(finalItem, tmdb);
            return finalItem;
        });
        return await Promise.all(promises);
    } catch (e) { return [{ id: "err", type: "text", title: "B站连接失败" }]; }
}

async function fetchBangumiDaily() {
    try {
        const res = await Widget.http.get("https://api.bgm.tv/calendar");
        const data = res.data || [];
        const dayId = (new Date().getDay() || 7);
        const items = data.find(d => d.weekday.id === dayId)?.items || [];
        
        const promises = items.map(async item => {
            const name = item.name_cn || item.name;
            // 【修复点3】兜底 description
            let finalItem = { 
                id: `bgm_${item.id}`, type: "tmdb", mediaType: "tv", 
                title: name, 
                subTitle: item.name, 
                description: `${item.name}\n暂无简介`, // 预设的占位格式
                genreTitle: "剧集",
                posterPath: item.images?.large 
            };
            const tmdb = await searchTmdb(name, "tv");
            if (tmdb) mergeTmdb(finalItem, tmdb);
            return finalItem;
        });
        return await Promise.all(promises);
    } catch (e) { return []; }
}

async function fetchTmdbFallback(traktType) {
    const type = traktType === "shows" ? "tv" : "movie";
    try {
        const r = await Widget.tmdb.get(`/trending/${type}/day`, { params: { language: "zh-CN" } });
        return (r.results || []).slice(0, 15).map(item => {
            const date = item.first_air_date || item.release_date || "";
            const genreText = getGenreText(item.genre_ids);
            return buildItem({
                id: item.id, tmdbId: item.id, type: type,
                title: item.name || item.title,
                date: date,
                genreText: genreText,
                poster: item.poster_path,
                subTitle: "TMDB Trending",
                rating: item.vote_average?.toFixed(1),
                desc: item.overview
            });
        });
    } catch(e) { return []; }
}
