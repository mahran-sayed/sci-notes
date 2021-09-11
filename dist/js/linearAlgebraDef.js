const data = {
    "basis":["A basis for a subspace W is a set of vectors v1, ...,vk in W such that:",["link","text"]],
    "characteristic polynomial":["The characteristic polynomial of a n by n matrix A is the polynomial in t given by the formula det(A - t*I).",["link","text"]],
    "column space":["The column space of a matrix is the subspace spanned by the columns of the matrix considered as vectors. See also: row space.",["link","text"]],
    "Vector space V":[" Set of vectors such that all combinations \(cv + dw\) remain in $V$ . Eight required rules are given in Section 3.1 for \(cv + dw\).",["link","text"]]
}; 
const selectDefInput = document.querySelector("#selectDef");
const defContainer = document.querySelector("#def");
const urlContainer = document.querySelector("#resources");
let options = "";
for(let def of Object.keys(data)){
    options += `<option value = '${def}'>${def}</option>`;
}

selectDefInput.innerHTML = options;
selectDefInput.addEventListener("change",()=> {
    let description = getDescription(selectDefInput.value);
    let urls = getUrls(selectDefInput.value);
    showDefData(description,urls);
});

function getDescription(name){
    return data[name][0];
}
function getUrls(name){
    return data[name][1];
}
function showDefData(description,urls){
    defContainer.innerHTML = description;
    urlContainer.innerHTML = `More Details: <a href = "${urls[0]}"> ${urls[1]}</a>`;
}