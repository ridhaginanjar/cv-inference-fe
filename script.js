const imageInput = document.querySelector("#image-submit")
const imagePreivew = document.querySelector("#image-preview")
const placeholder = document.querySelector(".upload-placeholder")


export function previewImage() {
    imageInput.addEventListener("change", function() {
        const file = imageInput.files[0];

        if (!file) {
            return
        }

        const imageUrl =URL.createObjectURL(file);
        
        imagePreview.src = imageUrl;
        placeholder.classList.add("hidden");
        imagePreivew.classList.remove("hidden");
    });
}