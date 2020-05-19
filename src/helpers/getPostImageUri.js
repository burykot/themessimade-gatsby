
const getPostImageUri = (fileName, imagesData) => {
    const isFullUrl = fileName ? !!fileName.match('http') : false;

    if(isFullUrl) return fileName;

    const imagesList = imagesData.allImageSharp.edges;
    const postImageData = imagesList.find(image => (
        image?.node?.fluid?.originalName === fileName
    ));

    return postImageData?.node?.fluid?.src
};

export { getPostImageUri };