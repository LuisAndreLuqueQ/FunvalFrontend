


const luisluque = {
    nombre: "Luis Luque",
    cargo: "Frontend Developer",
    sobreMi: {
        titulo: "WHO AM I?",
        descripcion: "I am a frontend developer passionate about building clean, responsive, and user-friendly web interfaces using HTML, CSS, and Tailwind."
    },
    mySkills: [
        { nombre: "HTML", rutaImagen: "/imagenes/file_type_html_icon_130541.svg" },
        { nombre: "CSS", rutaImagen: "/imagenes/file_type_css_icon_130661.svg" },
        { nombre: "JavaScript", rutaImagen: "/imagenes/javascript_original_logo_icon_146455.svg" },
        { nombre: "Tailwind", rutaImagen: "/imagenes/tailwindcss-mark.0~s.iziag2xd..svg" }
    ]
};


document.getElementById("about-title").innerText = luisluque.sobreMi.titulo;
document.getElementById("about-description").innerText = luisluque.sobreMi.descripcion;


const contenedorSkills = document.getElementById("skills-container");
let tarjetasHTML = "";

for (let i = 0; i < luisluque.mySkills.length; i++) {
    let habilidad = luisluque.mySkills[i];
    

    tarjetasHTML += `
        <div class="bg-[#1E293B] dark:bg-slate-300 p-6 rounded-2xl flex flex-col items-center justify-center border border-white/10 transition-colors">
            <img src="${habilidad.rutaImagen}" alt="${habilidad.nombre}" class="h-12 w-12 object-contain mb-3">
            <p class="text-sm font-bold tracking-wider uppercase dark:text-slate-900">${habilidad.nombre}</p>
        </div>
    `;
}


contenedorSkills.innerHTML = tarjetasHTML;