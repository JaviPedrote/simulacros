import { useEffect, useState } from "react";
import { quizCategories } from "./data/quizCategories";

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const Quiz = () => {

  // Nuevo estado para las preguntas fallidas.
  const [failedQuestions, setFailedQuestions] = useState([]);
  const [category, setCategory] = useState(null);
  // Nuevo estado para las preguntas seleccionadas (máximo 40).
  const [questions, setQuestions] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [showNext, setShowNext] = useState(false);
  const [nota, setNota] = useState(0);
  // Nuevo estado para controlar si ya se contestó la pregunta
  const [answered, setAnswered] = useState(false);


  // Calcular la nota según las preguntas totales.
  useEffect(() => {
    if (questions.length > 0) {
      setNota((score / questions.length) * 10);
    } else {
      setNota(0);
    }
  }, [score, questions]);

  // Iniciar el quiz, tomando hasta 40 preguntas aleatorias.
  const startQuiz = (selectedCategory, customQuestions = null) => {
    const allQuestions = customQuestions || quizCategories[selectedCategory];
    const shuffledAll = shuffleArray([...allQuestions]);
    const finalQuestions = shuffledAll.slice(0, 40);

    setCategory(selectedCategory);
    setQuestions(finalQuestions);
    setFailedQuestions([]);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setFeedback(null);
    setShowNext(false);
    setShuffledOptions(shuffleArray([...finalQuestions[0].options]));
    setAnswered(false); 
  };

  // Manejar la respuesta elegida.
  const handleAnswer = (isCorrect) => {
    if (!answered) {
      if (isCorrect) {
        setScore((prev) => prev + 1);
        setFeedback({ message: "¡Correcto!", correct: true });
      } else {
        const correctAnswer = questions[currentQuestion].options.find(
          (option) => option.correct
        ).text;
        setFeedback({
          message: `Respuesta correcta: ${correctAnswer}`,
          correct: false,
        });
        // Añadir la pregunta fallada
        setFailedQuestions((prev) => [...prev, questions[currentQuestion]]);
      }
      setShowNext(true);
      setAnswered(true);
    }
  };

  // Ir a la siguiente pregunta o mostrar la puntuación final.
  const nextQuestion = () => {
    const nextQuestionIndex = currentQuestion + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestion(nextQuestionIndex);
      setShuffledOptions(
        shuffleArray([...questions[nextQuestionIndex].options])
      );
      setFeedback(null);
      setShowNext(false);
      setAnswered(false); // Vuelve a permitir respuesta
    } else {
      setShowScore(true);
    }
  };

  // Función para reiniciar solo las preguntas falladas
  const retryFailedQuestions = () => {
    if (failedQuestions.length > 0) {
      // Se puede usar el mismo category o un específico si se desea.
      startQuiz(category, failedQuestions);
    }
  };

  return (
    <div className="p-6 xl:max-w-[80%] max-w-[95%] mx-auto bg-white rounded-xl shadow-md space-y-4 text-center">
      {/* Menú de inicio: escoger simulacro */}
      {!category ? (
        <div>
          <h2 className="text-xl font-bold">Selecciona un simulacro</h2>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
            onClick={() => startQuiz("acceso_datos")}
          >
            Acc Datos
          </button>
          <button
            className="mt-4 ml-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 cursor-pointer"
            onClick={() => startQuiz("desarrollo_interfaces")}
          >
            Des de Interfaces
          </button>
          <button
            className="mt-4 ml-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700 cursor-pointer"
            onClick={() => startQuiz("empresa")}
          >
            Empresa
          </button>
          <button
            className="mt-4 ml-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
            onClick={() => startQuiz("ingles")}
          >
            Ingles
          </button>
          <button
            className="mt-4 ml-2 bg-fuchsia-600 text-white px-4 py-2 rounded hover:bg-fuchsia-800 cursor-pointer"
            onClick={() => startQuiz("progr_serv_proces")}
          >
            Prog Ser Proc
          </button>
          <button
            className="mt-4 ml-2 bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-800 cursor-pointer"
            onClick={() => startQuiz("progr_mult_dispos_moviles")}
          >
            Prog M y Disp Mov
          </button>
          <button
            className="mt-4 ml-2 bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-800 cursor-pointer"
            onClick={() => startQuiz("sist_gest_empres")}
          >
            Sist Gest Empres
          </button>
        </div>
      ) : // Mostrar resultados al terminar
        showScore ? (
          <div>
            <h2 className="text-xl font-bold text-green-600">
              Tu puntuación: {score} / {questions.length}
            </h2>
            <h2 className="text-xl font-bold text-green-600">
              Tu nota: {nota.toFixed(2)}
            </h2>
            <button
              onClick={() => setCategory(null)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
            >
              Volver al menú
            </button>
            {failedQuestions.length > 0 && (
            <button
              onClick={retryFailedQuestions}
              className="mt-4 ml-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
            >
              Reintentar preguntas falladas
            </button>
          )}
          </div>
        ) : (
          // Pantalla de preguntas
          <div>
            <div className="mb-5 text-xs w-full text-left flex place-content-between xl:pt-9"><span className="text-gray-400 text-[70%]">{category}</span> <div>Pregunta nº : {currentQuestion + 1}<div className="font-semibold">Correctas: {score}</div></div></div>
            <h2 className="md:text-lg text-md font-semibold text-gray-700">
              {questions[currentQuestion]?.question}
            </h2>
            <div className="mt-4 space-y-4">
              {shuffledOptions.map((option, index) => (
                <button
                  key={index}
                  disabled={answered}
                  onClick={() => handleAnswer(option.correct)}
                  className={`${answered ? "bg-gray-100 cursor-not-allowed text-gray-500": " bg-gray-100 hover:bg-gray-300 cursor-pointer"} block w-full md:text-lg text-sm text-left p-2 rounded `}
                >
                  {option.text}
                </button>
              ))}
            </div>
            {feedback && (
              <p
                className={`mt-4 p-2 rounded ${feedback.correct
                    ? "bg-green-200 text-green-700"
                    : "bg-red-200 text-red-700"
                  }`}
              >
                {feedback.message}
              </p>
            )}
            {showNext && (
              <button
                onClick={nextQuestion}
                className="mt-4 bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700 cursor-pointer"
              >
                Siguiente
              </button>
            )}
          </div>
        )}
    </div>
  );
};

export default Quiz;
