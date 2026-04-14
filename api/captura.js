const video = document.getElementById("cameraFeed");
const canvas = document.getElementById("capturedImage");
const button = document.getElementById("captureButton");
const contexto = canvas.getContext("2d");

navigator.mediaDevices.getUserMedia({ video: true})
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(erro => {
        console.error("erro ao acessar a cãmera: ", erro);
   });

   button.addEventListener("click", () => {
        //desenhar o quadro atual do vídeo na área do canvas
        contexto.drawImage(video, 0, 0, canvas.width, canvas.height)    
   })

