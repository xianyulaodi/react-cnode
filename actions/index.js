/*
 *author xianyulaodi 2017/1/23
 */

import fetch from 'isomorphic-fetch'
import fetchJsonp from 'fetch-jsonp'
import * as types from '../constants/ActionTypes'

/**
 * get请求
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
const _get = ({ url, query }, dispatch) => {
    dispatch({ type: types.START_LOADING })
    let _url
    if (query) {
        _url = `https://api.douban.com/v2/movie/${url}?${query}`
    } else {
        _url = `https://api.douban.com/v2/movie/${url}`
    }
    return fetch(_url)
        .then(res => {

            dispatch({ type: types.FINISH_LOADING })
            if (res.status >= 200 && res.status < 300) {
                return res.json()
            }

            return Promise.reject(new Error(res.status));
        })
}


/**
 * 获取主题主页
 * https://cnodejs.org/api/v1/topics
 * @param  page Number 页数
 * @param  tab  String 主题分类。目前有 ask share job good
 * @param  limit Number 每一页的主题数量
 * @param  mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
 */
export function fetchTopics(page = 1, tab = 'all', limit = 10, ) {

    return function(dispatch) {

        return fetch(`https://cnodejs.org/api/v1/topics?page=${page}&tab=${tab}&limit=${limit}`)
            .then(response => response.json())
            .then(json =>
                dispatch({
                    type: types.FETCH_TOPICS_SUCCESS,
                    topics: json.data
                })
            )
            .catch(ex =>
                dispatch({
                    type: types.FETCH_TOPICS_FAIL
                    // 如果需要处理失败或的数据，这里返回，然后在对应的reducer的switch里面对应好即可
                })
            )
    }
}

/**
 * 获取主题详情
 * https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312
 * @param id 文章id
 * 
 */
export function fetchTopicDetail(id) {

    return function(dispatch) {

        return fetch(`https://cnodejs.org/api/v1/topic/${id}`)
            .then(response => response.json())
            .then(json =>
                dispatch({
                    type: types.FETCH_DETAIL_SUCCESS,
                    detailData: json.data
                })
            )
            .catch(ex =>
                dispatch({
                    type: types.FETCH_DETAIL_FAIL
                })
            )
    }
}