

const Search = (products, searchText) => {
    let dataRender = products && products.length > 0 && products.filter((product) => {
        if (product.nameItem.toLowerCase().includes(searchText.titleSearch.toLowerCase())) {
            return product
        } else {
            if (product.manufacturerData) {
                if (product.manufacturerData.valueVi.toLowerCase().includes(searchText.titleSearch.toLowerCase())) {
                    return product
                } else return null
            }

        }
    })
    return dataRender
}

export default Search;