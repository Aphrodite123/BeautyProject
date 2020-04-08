import { httpMethod, request } from './fetch';

const HOST = "https://gank.io/api/v2";

export default class API {

    /**
     * 首页banner轮播
     */
    static queryBanner() {
        let api = {
            host: HOST,
            path: '/banners',
            method: httpMethod.GET,
        }
        return request(api);
    }

    /**
     * https://gank.io/api/v2/categories/<category_type> 请求方式: GET
     * 注:获取所有分类具体子分类[types]数据
     * category_type 可接受参数 Article | GanHuo | Girl(Article: 专题分类、 GanHuo: 干货分类 、 Girl:妹子图)
     */
    static queryByCategories(categoryType) {
        let api = {
            host: HOST,
            path: '/categories/' + categoryType,
            method: httpMethod.GET,
        }
        return request(api);
    }

    /**
     * https://gank.io/api/v2/data/category/<category>/type/<type>/page/<page>/count/<count>
     * 请求方式: GET
     * 注:
     * category 可接受参数 All(所有分类) | Article | GanHuo | Girl
     * type 可接受参数 All(全部类型) | Android | iOS | Flutter | Girl ...，即分类API返回的类型数据
     * page: >=1
     * count: [10, 50]
     */
    static queryByCategoreList(category, type, page, count) {
        let api = {
            host: HOST,
            path: '/data',
            method: httpMethod.GET,
            params: {
                category: category,
                type: type,
                page: page,
                count: count
            },
        }
        return request(api);
    }

    /**
     * https://gank.io/api/v2/random/category/<category>/type/<type>/count/<count>
     * 请求方式: GET
     * 注:
     * category 可接受参数 Article | GanHuo | Girl
     * type 可接受参数 Android | iOS | Flutter | Girl，即分类API返回的类型数据
     * count: [1, 50]
     */
    static queryRandom(category, type, count) {
        let api = {
            host: HOST,
            path: '/random',
            method: httpMethod.GET,
            params: {
                category: category,
                type: type,
                count: count
            },
        }
        return request(api);
    }

    /**
     * https://gank.io/api/v2/post/<post_id>
     * 请求方式: GET
     * 注:
     * post_id 可接受参数 文章id[分类数据API返回的_id字段]
     */
    static queryArticleDetail(postId) {
        let api = {
            host: HOST,
            method: httpMethod.GET,
            params: {
                post: postId
            },
        }
        return request(api);
    }

    /**
     * https://gank.io/api/v2/hot/<hot_type>/category/<category>/count/<count>
     * 请求方式: GET
     * 注:
     * hot_type 可接受参数 views（浏览数） | likes（点赞数） | comments（评论数）❌
     * category 可接受参数 Article | GanHuo | Girl
     * count: [1, 20]
     */
    static queryHot(hot, category, count) {
        let api = {
            host: HOST,
            method: httpMethod.GET,
            params: {
                hot: hot,
                category: category,
                count: count
            },
        }
        return request(api);
    }

    /**
     * https://gank.io/api/v2/post/comments/<post_id>
     * 请求方式: GET
     * 注:
     * post_id 可接受参数 文章Id
     */
    static queryComment(postId) {
        let api = {
            host: HOST,
            path: "/post",
            method: httpMethod.GET,
            params: {
                comments: postId
            },
        }
        return request(api);
    }

    /**
     * https://gank.io/api/v2/search/<search>/category/<category>/type/<type>/page/<page>/count/<count>
     * 请求方式: GET
     * 注:
     * search 可接受参数 要搜索的内容
     * category 可接受参数 All[所有分类] | Article | GanHuo
     * type 可接受参数 Android | iOS | Flutter ...，即分类API返回的类型数据
     * count: [10, 50]
     * page: >=1
     */
    static search(search, category, type, page, count) {
        let api = {
            host: HOST,
            method: httpMethod.GET,
            params: {
                search: search,
                category: category,
                type: type,
                page: page,
                count: count,
            },
        }
        return request(api);
    }

}

