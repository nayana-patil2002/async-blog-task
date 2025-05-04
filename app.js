 
 let cl=console.log;
 


 const blogForm=document.getElementById("blogForm");
 const titleControl=document.getElementById("title");
 const contentontrol=document.getElementById("content");
 const blogContainer=document.getElementById("blogContainer")


   const blogArr=[
       {
        title:"angular",
        content:"Angular is a popular and powerful framework for building web applications of any scale",
        blogId:"123"
       },
       {
        title:"Javascript",
        content:"Javascript is a popular and powerful framework for building web applications of any scale",
        blogId:"124"
       },
       {
        title:"Sass",
        content:"Sass is a popular and powerful framework for building web applications of any scale",
        blogId:"125"
       },
       
      ]




 const generateUuid= () =>{
  return (
    String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
  ).replace(/[xy]/g, (character) => {
    const random = (Math.random() * 16) | 0;
    const value = character === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
 });
};




   const creatCards = (arr) =>{
            let result=""
             arr.forEach(ele=>{
                 result+=`
                    <div class="card mb-5">
                         <div class="card-header">
                             <h2>${ele.title}</h2>
                         </div>

                         <div class="card-body">
                            <p>${ele.content}</p>
                        </div>

                        <div class="card-footer d-flex justify-content-between">
                             <button class="btn btn-primary bg-success">Edit</button>
                             <button class="btn btn-primary bg-danger">Remove</button>
                        </div>
                    </div>





                 `
             });

             blogContainer.innerHTML=result;
   }
   


  const createBlog = (blog) => {
         return new Promise((resolve, reject)=>{
             setTimeout(() => {
                 let error=Math.random() >= .3 ? false: true;

                 if(!error){
                    blogArr.push(blog)
                    resolve("Blogs created Successfully!")
                 }else{
                   reject("Somthing went wrong while creating Blog!")
                 }
                 
                 
             }, 1500);
         })
  }


  const fetchData =(data)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
          let error=Math.random() >= .3 ? false: true;

          if(!error){
             
             resolve(blogArr)
          }else{
            reject("Somthing went wrong while Fetching Data")
          }
          
          
      }, 1200);
  })
  }









   const onblogadd = async eve =>{
            
           eve.preventDefault();

           let blogObj={
            title:titleControl.value,
            content:contentontrol.value,
            blogId:generateUuid(),
           }

           cl(blogObj);
           blogForm.reset()

            try{

              let res1= await createBlog(blogObj)
              cl(res1)
 
              let res2 = await fetchData()
              cl(res2)

               let res3= creatCards(blogArr)
               cl(res3)
              



            }catch(err){
                cl(err)
            }
           

        }






 blogForm.addEventListener("submit", onblogadd)