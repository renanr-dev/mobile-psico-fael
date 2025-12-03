import { Swiper, SwiperSlide } from "swiper/react";
import "../GlobalStyles.astro";
import "./Feedback.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Feedback() {
  let feedbacks = [
    "Tem sido uma benção, a forma que as sessões tem sido conduzidas tem me ajudado muito.",
    "Eu tava perdida, literalmente e quando conheci vc, aos poucos vc foi me tirando do buraco onde eu estava. Graças a vc, estou conseguindo (devagar) evoluir e ter controle sobre minha vida.",
    "Rafa, saliento em todas as sessões o quanto sou grata por seu acolhimento. Gosto do quanto você realmente humaniza e torna leve a nossa troca. Sua forma de levar os nossos encontros, faz com que eu me sinta a vontade para continuar me abrindo e percorrendo esse caminho de evolução.",
    "Gratidão!",
    "[...] Técnicas pedagógicas de tratamento e respeito às particularidades do paciente.",
    "Um profissional excelente, empático, que me inspira como profissional e além disso me faz me sentir ótima nas sessões.",
    "É uma experiência muito boa, me sinto muito ouvido e gosto da forma que ele faz as perguntas certas para que eu mesmo chegue a uma conclusão sobre.",
    "Um profissional que com apenas 26 anos me surpreendeu. Temos uma troca muito boa, produtiva. Dias de ouvir, dias de falar, sorrir chorar. Pra mim mais do que um profissional, uma pessoa que esta se tornando um amigo.",
    "[...] capacidade de empatia, a capacidade de identificar o subjetivo e desenvolver intervenções aplicáveis, além de todo o arcabouço cultural, técnico e científico.",
    "Percebo que melhorei muito desde que iniciei esse processo, não apenas nos meus sentimentos do dia a dia, mas também na forma como enxergo a mim mesma. Cada encontro me ajuda a me conhecer melhor, a entender minhas emoções e a encontrar caminhos mais saudáveis para lidar com os desafios",
    "Atualmente estamos mapeando as coisas que se passaram na minha vida… sinto que tenho mais clareza sobre as coisas... e que estamos evoluindo...",
    "Adoro a dinâmica das sessões o quanto o Rafa tá aberto a ouvir de forma muito respeitosa e humana. É nítido seu preparo enquanto psicólogo e seu interesse pela vivência do cliente",
  ];

  const listaEmPares: string[][] = [];

  for (let i = 0; i < feedbacks.length; i += 2) {
    listaEmPares.push(feedbacks.slice(i, i + 2));
  }

  return (
    <div className="container">
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "30px",
          textAlign: "center",
        }}
        className="header-title voga-font-header-2"
      >
        Confira o que alguns clientes tem a dizer sobre os meus serviços:
      </h2>
      <Swiper
        style={{ height: "auto", width: "90%" }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {listaEmPares.map((par, index) => (
          <div key={index}>
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {par[1] ? (
                <FeedbackModel feedbackLeft={par[0]} feedbackRight={par[1]} />
              ) : (
                <SingleFeedbackModel feedbackLeft={par[0]} />
              )}
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

export default Feedback;

type Feedbacks = {
  feedbackLeft: string;
  feedbackRight: string;
};
type SingleFeedbacks = {
  feedbackLeft: string;
};

function FeedbackModel({ feedbackLeft, feedbackRight }: Feedbacks) {
  return (
    <div>
      <div className="feedback-row">
        <div className="feedback-message">"{feedbackLeft}"</div>
        <div className="feedback-message">"{feedbackRight}"</div>
      </div>
    </div>
  );
}
function SingleFeedbackModel({ feedbackLeft }: SingleFeedbacks) {
  return (
    <div>
      <div className="feedback-row">
        <div className="feedback-message">"{feedbackLeft}"</div>
      </div>
    </div>
  );
}
