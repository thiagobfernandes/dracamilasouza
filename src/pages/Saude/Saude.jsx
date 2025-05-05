import React, { useState } from "react";
import { Navbar } from "../../components";
import { Banner } from "../../components/banner/Banner";
import AppointmentSection from "../../components/AppointmentSection/AppointmentSection";
import "./style.css";
import { useLanguage } from "../../context/languageContext";

export const Saude = () => {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  const texto = language === "es"
    ? `Medicina Integrativa: un camino hacia la salud real
La vida moderna nos acostumbró a tratar solo los síntomas, enmascarando las señales que el cuerpo da de que algo no está bien. Pero la salud no es la ausencia de enfermedad, es equilibrio, vitalidad y bienestar profundo.

En la Medicina Integrativa, no seguimos el camino más rápido, sino el más eficaz. Te vemos como un todo, entendiendo tu historia, tus emociones, tu alimentación, tu sueño, tu rutina y tus dolores. Porque ningún síntoma aparece por casualidad.

Si sientes que siempre estás cansado, hinchado, con fluctuaciones de peso, ansiedad, problemas digestivos o cualquier otro malestar que parece no tener solución, tu cuerpo está pidiendo atención. ¿La buena noticia? Aún hay tiempo para actuar.

Mi trabajo es ayudarte a tratar la raíz del problema, y no solo silenciar los síntomas. Con una mirada cuidadosa y basada en la ciencia, creo estrategias personalizadas para restaurar tu equilibrio, fortalecer tu salud y evitar que pequeñas molestias se conviertan en grandes enfermedades.

La mejor decisión que puedes tomar por tu salud es actuar antes de que llegue la enfermedad. Y, si ya está presente, tratarla de manera completa, respetando tu cuerpo y su tiempo de curación.

Esta es una invitación para reconectarte contigo mismo, abandonar ciclos de malestar y construir una longevidad con energía y calidad de vida.`
    : `Medicina Integrativa: um caminho para a saúde real
A vida moderna nos acostumou a tratar apenas os sintomas, mascarando sinais que o corpo dá de que algo não está bem. Mas saúde não é a ausência de doença – é equilíbrio, vitalidade e bem-estar profundo.

Na Medicina Integrativa, não seguimos o caminho mais rápido, e sim o mais eficaz. Olhamos para você como um todo, entendendo sua história, suas emoções, sua alimentação, seu sono, sua rotina e suas dores. Porque nenhum sintoma surge por acaso.

Se você sente que está sempre cansado, inchado, com oscilações de peso, ansiedade, problemas digestivos ou qualquer outro incômodo que parece não ter solução, seu corpo está pedindo atenção. A boa notícia? Ainda dá tempo de agir.

Meu trabalho é ajudar você a tratar a raiz do problema, e não apenas silenciar os sinais. Com um olhar cuidadoso e embasado na ciência, crio estratégias personalizadas para restaurar seu equilíbrio, fortalecer sua saúde e evitar que pequenas queixas se tornem grandes doenças.

A melhor decisão que você pode tomar pela sua saúde é agir antes da doença chegar. E, se ela já está presente, tratá-la de forma completa, respeitando seu corpo e seu tempo de cura.

Este é um convite para você se reconectar consigo, abandonar ciclos de mal-estar e construir uma longevidade com energia e qualidade de vida.`;

  return (
    <>
      <Navbar />
      <Banner
        titulo={""}
        img="https://img.freepik.com/fotos-gratis/diagrama-de-esboco-de-cuidados-de-saude-mental_53876-121351.jpg?t=st=1746486991~exp=1746490591~hmac=97a896a6462941b2b70067ed3478623528c43bd6762fe53f6e2d5ff766deca5f&w=826"
        p={""}
        color={"#000"}
      />

      <section className="generic__section">
        <div className="container">
          <div className="textBody">
            <h2>{language === "es" ? "Medicina Integrativa" : "Medicina Integrativa"}</h2>

            {/* Desktop: texto completo */}
            <div className="desktop-only">
              <p>{texto}</p>
            </div>

            {/* Mobile: texto cortado + ver mais/menos */}
            <div className={`mobile-only ${expanded ? "expanded" : "collapsed"}`}>
              <p>{texto}</p>
              <button className="ver-mais-btn" onClick={() => setExpanded(!expanded)}>
                {expanded
                  ? language === "es" ? "VER MENOS" : "VER MENOS"
                  : language === "es" ? "VER MÁS" : "VER MAIS"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="divcomImagem">
        <div className="images">
          <img
            src="https://static.vecteezy.com/ti/fotos-gratis/p2/8017087-mulher-relaxante-sentada-e-praticando-meditacao-no-parque-publico-para-alcancar-a-felicidade-da-paz-interior-sabedoria-sob-a-arvore-no-verao-gratis-foto.jpg"
            alt=""
          />
        </div>
        <div className="text">
          <h3>{language === "es" ? "La verdadera salud va más allá de tratar los síntomas." : "Saúde de verdade vai além de tratar sintomas."}</h3>
          <p>
            {language === "es"
              ? `La Medicina Integrativa busca la causa de lo que sientes — cansancio, dolores, ansiedad, hinchazón — y te trata como un todo: cuerpo, mente y emociones.

Con una mirada humana y basada en la ciencia, creamos un plan personalizado para restaurar tu equilibrio y ayudarte a vivir con más energía y bienestar.

🌿 Tu cuerpo habla. Es hora de escucharlo con atención.`
              : `A Medicina Integrativa busca a causa do que você sente — cansaço, dores, ansiedade, inchaço — e trata você como um todo: corpo, mente e emoções.

Com um olhar humano e embasado na ciência, criamos um plano personalizado para restaurar seu equilíbrio e te ajudar a viver com mais energia e bem-estar.

🌿 Seu corpo fala. É hora de escutar com atenção.`}
          </p>
        </div>
      </div>

      <AppointmentSection />
    </>
  );
};
