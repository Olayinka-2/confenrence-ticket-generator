import { useEffect, useState } from "react"

export default function FileUpload() {
   const [image, setImage] = useState(null);

   useEffect(() => {
      const preventDefaults = ((event) => {
         event.preventDefault();
         event.stopPropagation();
      });

      document.addEventListener('dragover', preventDefaults);
      document.addEventListener('drop', preventDefaults);

      return () => {
         document.removeEventListener("dragover", preventDefaults);
         document.removeEventListener("drop", preventDefaults);
      }
   }, []);

   const handleFileSelect = (event) => {

      const file = event.target.files[0];
      if(file) {
         const imageUrl = URL.createObjectURL(file);
         setImage(imageUrl);
      }
   };

   const handleDrop = (event) => {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      if(file) {
         const imageUrl = URL.createObjectURL(file);
         setImage(imageUrl);
      }
   }

   const handleDragOver = (event) => {
      event.preventDefault();
   }
   return (
      <div  style={{
         width: image ? '10rem' : '100%',
         height: '10rem',
         backgroundColor:' #1a183fcc',
         borderRadius: image ? '100%': '.5rem',
         border: '1px dashed #72718dcc',
      }} >
         <div
         className="avatar-container"
         style={{
            background: image ? `url(${image}) center/100%` : "#1a183fcc",
               overflow: "hidden",
               position: "relative",
               height: '10rem',
               width: image ? '10rem' : '100%',
               borderRadius: image && '50%'
         }}
         onDragOver={handleDragOver}
         onDrop={handleDrop}
         onClick={() => 
            document.getElementById("fileInput").click()
         }>
            {
               !image && <p>Drag and drop file here or click to upload</p>
            }
         </div>
         <input type="file"
            id="fileInput"
            accept="image/*"
            style={{display:'none'
            }}
            onChange={handleFileSelect}/>

         {
            image && (
               <div  style={{marginTop: "10px",
                  position: 'absolute',
                  top: '1rem',
                  right: '-3rem',
                  display: 'flex',
                  flexDirection: 'column',
               }}>
                  <button onClick={() => setImage(null)}
               style={{margin: "10px 0px",
                  width: '10rem'
               }}
               className="removeBtn"> 
                  Remove Image
               </button>
                  <button onClick={() => document.getElementById("fileInput").click()}
               style={{
                  width: '10rem'
               }}
               className="removeBtn"> 
                  Change Image
               </button>
               </div>
               
            )
         }
      </div>
      
   )
}