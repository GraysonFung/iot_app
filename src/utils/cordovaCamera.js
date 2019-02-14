// const Camera={}

export const openAlbum = () => {
  return new Promise((resolve, reject) => {
    // navigator.camera.getPicture(onSuccess, onFail, {
    //   quality: 50,
    //   destinationType: Camera.DestinationType.DATA_URL,
    //   sourceType: 0
    // })

    function onSuccess (imageData) {
      resolve('data:image/jpeg;base64,' + imageData)
    }

    function onFail (message) {
      reject(message)
      alert(message)
    }
  })
}

export const takePicture = () => {
  return new Promise((resolve, reject) => {
    // navigator.camera.getPicture(onSuccess, onFail, {
    //   quality: 50,
    //   destinationType: Camera.DestinationType.DATA_URL,
    //   sourceType: 1
    // })

    function onSuccess (imageData) {
      resolve('data:image/jpeg;base64,' + imageData)
    }

    function onFail (message) {
      reject(message)
      alert(message)
    }
  })
}
