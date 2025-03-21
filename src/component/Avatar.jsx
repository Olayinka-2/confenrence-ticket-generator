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
      }}>
         <div
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
               <button onClick={() => setImage(null)}
               style={{marginTop: "10px",
                  position: 'absolute',
                  top: '5rem',
                  right: '-3rem',
                  width: '10rem'
               }}
               className="removeBtn"> 
                  Remove Image
               </button>
            )
         }
      </div>
      
   )
}