import { customFetch } from "../../axios";



export const getAllProductsThunk = async(_,thunkAPI) => {
    const {page,category,name,sort,search} = thunkAPI.getState().products;
    let url = `/products?name=${name}&category=${category}&page=${page}&sort=${sort}`;
    if(search){
        url = url+`&search${search}`
    }
    console.log({url});
    try {
        const resp = await customFetch.get(url);
        return resp.data
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data.msg)
    }
}