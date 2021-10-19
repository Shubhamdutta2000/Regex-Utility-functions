// function file Extension validator
function validateFileExtension(fileName, validExtensions) {
    validExtensions = validExtensions.split(",").join("|");
    var regex = new RegExp("(.*?)\.(" + validExtensions + ")$");
    return regex.test(fileName);
}

document.getElementById("file").addEventListener("change", function () {
    const Extensions = "txt,pdf,doc,json",
        sizeLimit = 1_000_000; // 1 MB
    const { name: fileName, size: fileSize } = this.files[0];

    let val = validateFileExtension(fileName, Extensions);
    if (!val) {
        alert("file type not allowed");
        this.value = null;
    } else if (fileSize > sizeLimit) {
        alert("file size too large")
        this.value = null;
    }
})
