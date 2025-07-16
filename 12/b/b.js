const person=[
    {
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqAbEMyOhKVfUizcuOOZ4p8i0FqmKO8MpbNA&s",
        Name:"Cristan Ryan",
        Position:"Frontend developer",
        Description:"Pagedone was born. The success and growth we have achieved since our inception are a testament to the value.",

    },
    {
        Image:"https://c8.alamy.com/comp/M10PC1/smiling-experienced-it-man-programming-M10PC1.jpg",
        Name:"Kim kim",
        Position:"Design UI/UX",
        Description:"Pagedone was born. The success and growth we have achieved since our inception are a testament to the value.",

    },{
        Image:"https://beecrowd.com/wp-content/uploads/2024/04/2022-03-24-Como-um-desenvolvedor-pode-tornar-um-gestor-de-TI.jpg",
        Name:"Park Seo Jun",
        Position:"Database",
        Description:"Pagedone was born. The success and growth we have achieved since our inception are a testament to the value.",

    },
    {
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnDo5RGYYI7StSqAdYfpQkRB4F_IS0VsnorQ&s",
        Name:"Emma Davis",
        Position:"Frontend developer",
        Description:"Pagedone was born. The success and growth we have achieved since our inception are a testament to the value",

    },
    {
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV2XJHrJKKmw5EGnvBvKFS429HiPOKDjqheA&s",
        Name:"Doctor Dy",
        Position:"Backend developer",
        Description:"Pagedone was born. The success and growth we have achieved since our inception are a testament to the value",

    },
]

const contianers=document.querySelector('.containers')
function display(data){
    const htmlContainer=data.map((d)=>{
        return`
        <div class="card">
            <img src=${d.Image} alt="">
            <div class="name_Post">
                <div class="Name"> ${d.Name} </div>
                <div class="position"> ${d.Position} </div>
            </div>
            <div class="text"> ${d.Description} </div>
        </div>
        `
    }).join("")
    contianers.innerHTML=htmlContainer
}
display(person)