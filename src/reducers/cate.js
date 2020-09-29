import { CATE_MENU, CATE_SUB, CATE_SUB_LIST } from '@constants/cate'

const INITIAL_STATE = {
  menu: [],
  category: [],
  subMenu: [],
  subCategory: {}
}

export default function cate(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CATE_MENU: {
      const menu = action.payload.data
      const items = action.payload.global.cateList
      // const menu = categoryList.map(({ id, name }) => ({ id, name }))
      return { ...state, menu,items  }
    }
    case CATE_SUB: {
      return {
        ...state,
        // subMenu: action.payload.category.subCategoryList
      }
    }
    case CATE_SUB_LIST: {
      // const { id, itemList } = action.payload
      return {
        ...state,
        // subCategory: { ...state.subCategory, [id]: itemList }
      }
    }
    default:
      return state
  }
}
