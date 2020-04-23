import { CHANGE_CURRENT_ALBUM, CHANGE_ENTER_LOADING } from './constants'
import { getAlbumDetailRequest } from '../../../api/request'
import { fromJS } from 'immutable'

const changeCurrentAlbum = (data) => ({
  type: CHANGE_CURRENT_ALBUM,
  data: fromJS(data)
});

export const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data
});

export const getAlbumList = id => dispacth => {
  getAlbumDetailRequest(id).then(res => {
    const data = res.playlist
    console.log(data, 'albumdata');
    dispacth(changeCurrentAlbum(data))
    dispacth(changeEnterLoading(false))
  }).catch(() => {
    console.log("获取album数据失败!")
  })
}