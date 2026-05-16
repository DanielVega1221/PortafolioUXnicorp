"use client";

import { useState, useMemo } from "react";
import { QUESTIONS_EN } from "@/components/uxscore/questions-en";

type QuestionOption = {
  id: string;
  label: string;
  detail: string;
  score: number;
  areaLabel: string;
  recommendation: string;
  target: string;
};

type Question = {
  id: string;
  eyebrow: string;
  prompt: string;
  helper: string;
  whyItMatters: string;
  tip: string;
  options: QuestionOption[];
};

type Answers = Record<string, string>;

const QUESTIONS: Question[] = [
  {
    id: "speed",
    eyebrow: "01 · Velocidad",
    prompt: "¿Cuánto tarda en cargar tu web?",
    helper: "Si no lo mediste, elegí la sensación más cercana que te transmite hoy.",
    whyItMatters:
      "La velocidad condiciona la atención antes incluso de que el usuario lea tu mensaje. Si el primer pantallazo tarda, la fricción ya empezó.",
    tip: "Pensalo sobre todo en mobile y con datos, no solo en Wi‑Fi de escritorio.",
    options: [
      {
        id: "under-2",
        label: "Menos de 2 segundos",
        detail: "Se percibe rápida y responde casi al instante.",
        score: 95,
        areaLabel: "Velocidad sólida",
        recommendation: "Mantené controladas las imágenes, scripts y el peso del above the fold.",
        target: "Objetivo actual cumplido",
      },
      {
        id: "between-2-4",
        label: "Entre 2 y 4 segundos",
        detail: "Todavía usable, pero ya agrega fricción en mobile.",
        score: 62,
        areaLabel: "Velocidad con fricción",
        recommendation: "Reducir peso visual, revisar imágenes y eliminar scripts innecesarios arriba del fold.",
        target: "Bajar a menos de 2 segundos",
      },
      {
        id: "over-4",
        label: "Más de 4 segundos",
        detail: "Probablemente estés perdiendo atención antes del mensaje principal.",
        score: 24,
        areaLabel: "Velocidad crítica",
        recommendation: "Priorizar performance antes de sumar más diseño: optimización de assets, layout y carga inicial.",
        target: "Recortar más del 50% del tiempo de carga",
      },
    ],
  },
  {
    id: "clarity",
    eyebrow: "02 · Claridad",
    prompt: "¿Tenés claro qué debe hacer el visitante?",
    helper: "Buscamos una acción principal obvia, no varias opciones compitiendo entre sí.",
    whyItMatters:
      "Una web puede verse bien y aun así fallar si no guía. Cuando la acción principal no es evidente, la atención se dispersa y la conversión cae.",
    tip: "Si tu visitante no entiende qué hacer en 5 segundos, hay una oportunidad clara de mejora.",
    options: [
      {
        id: "very-clear",
        label: "Sí, muy claro",
        detail: "La acción principal está definida y visible.",
        score: 92,
        areaLabel: "Mensaje claro",
        recommendation: "Refinar copy y jerarquía visual para sostener esa claridad en mobile y desktop.",
        target: "Mantener un CTA dominante",
      },
      {
        id: "somewhat-clear",
        label: "Más o menos",
        detail: "Hay intención, pero se diluye entre varias cosas al mismo tiempo.",
        score: 56,
        areaLabel: "Mensaje ambiguo",
        recommendation: "Simplificar el headline, reducir distracciones y dejar una acción principal por pantalla.",
        target: "Que el visitante entienda qué hacer en 5 segundos",
      },
      {
        id: "not-clear",
        label: "No, no del todo",
        detail: "Hoy la web probablemente informa, pero no guía.",
        score: 20,
        areaLabel: "Mensaje débil",
        recommendation: "Definir propuesta, CTA principal y orden de lectura antes de seguir diseñando más secciones.",
        target: "Un mensaje central y una sola prioridad de acción",
      },
    ],
  },
  {
    id: "goal",
    eyebrow: "03 · Objetivo",
    prompt: "¿Tu web tiene un objetivo claro?",
    helper: "No es lo mismo una web para captar leads que una para vender o informar.",
    whyItMatters:
      "Sin un objetivo principal claro, la estructura pierde dirección. El problema después no es solo de diseño: también es de decisiones.",
    tip: "Elegir una prioridad ayuda a ordenar contenido, CTAs, métricas y recorrido del usuario.",
    options: [
      {
        id: "leads",
        label: "Generar leads",
        detail: "Querés consultas, reuniones o contactos calificados.",
        score: 90,
        areaLabel: "Objetivo comercial definido",
        recommendation: "Alinear formularios, CTAs y prueba social para aumentar intención de contacto.",
        target: "Medir visitas → consultas",
      },
      {
        id: "sales",
        label: "Vender",
        detail: "La web tiene que empujar a compra o reserva.",
        score: 86,
        areaLabel: "Objetivo transaccional definido",
        recommendation: "Trabajar confianza, tiempos de carga y reducción de pasos antes del checkout o reserva.",
        target: "Medir visitas → ventas",
      },
      {
        id: "inform",
        label: "Informar",
        detail: "Querés educar o presentar, pero sin conversión primaria fuerte.",
        score: 68,
        areaLabel: "Objetivo informativo",
        recommendation: "Definir una conversión secundaria útil: contacto, demo, descarga o consulta.",
        target: "Agregar una acción secundaria medible",
      },
      {
        id: "unclear-goal",
        label: "No lo tengo claro",
        detail: "Eso suele reflejarse enseguida en la estructura de la web.",
        score: 22,
        areaLabel: "Objetivo indefinido",
        recommendation: "Definir primero para qué existe la web. Sin eso, diseño y desarrollo pierden dirección.",
        target: "Elegir una meta principal antes de rediseñar",
      },
    ],
  },
];

function findOption(questions: Question[], questionId: string, optionId: string | undefined) {
  const question = questions.find((item) => item.id === questionId);
  return question?.options.find((option) => option.id === optionId);
}

function getCompletionCount(questions: Question[], answers: Answers) {
  return questions.filter((question) => answers[question.id]).length;
}

function getPartialScore(questions: Question[], answers: Answers) {
  const selected = questions.map((question) => findOption(questions, question.id, answers[question.id])).filter(Boolean) as QuestionOption[];

  if (!selected.length) {
    return 0;
  }

  return Math.round(selected.reduce((sum, option) => sum + option.score, 0) / selected.length);
}

function getResult(questions: Question[], answers: Answers, locale: 'es' | 'en' = 'es') {
  const selected = questions.map((question) => findOption(questions, question.id, answers[question.id]));

  if (selected.some((item) => !item)) {
    return null;
  }

  const completed = selected as QuestionOption[];
  const score = Math.round(completed.reduce((sum, option) => sum + option.score, 0) / completed.length);

  const isEN = locale === 'en';

  let status = isEN ? "Good starting point" : "Buen punto de partida";
  let statusTone = "text-emerald-700";
  let summary = isEN
    ? "Your website has a healthy base, but there's still room to refine clarity, performance or focus to convert better."
    : "Tu web tiene una base saludable, pero todavía puede afinar claridad, performance o foco para convertir mejor.";

  if (score < 50) {
    status = isEN ? "High improvement opportunity" : "Oportunidad de mejora alta";
    statusTone = "text-rose-700";
    summary = isEN
      ? "Right now your website is probably informing more than guiding. First priority: organize message, speed and objective."
      : "Hoy tu web probablemente está informando más de lo que guía. Primero conviene ordenar mensaje, velocidad y objetivo.";
  } else if (score < 75) {
    status = isEN ? "Significant friction" : "Hay fricción importante";
    statusTone = "text-amber-700";
    summary = isEN
      ? "There's intent, but the flow still has clear friction points. A few well-prioritized changes can make a big difference."
      : "Hay intención, pero el recorrido todavía tiene fricciones claras. Con pocos cambios bien priorizados se puede mejorar mucho.";
  }

  const priorities = [...completed]
    .sort((left, right) => left.score - right.score)
    .slice(0, 2)
    .map((item) => ({
      title: item.areaLabel,
      recommendation: item.recommendation,
      target: item.target,
    }));

  return {
    score,
    status,
    statusTone,
    summary,
    priorities,
  };
}


function scoreRingBackground(score: number) {
  const safeScore = Math.max(0, Math.min(100, score));
  return `conic-gradient(#F37AA6 0 ${safeScore * 3.6}deg, rgba(17, 24, 39, 0.08) ${safeScore * 3.6}deg 360deg)`;
}

export default function UXScoreSection({ locale = 'es' }: { locale?: 'es' | 'en' }) {
  const isEN = locale === 'en';
  const activeQuestions = isEN ? QUESTIONS_EN : QUESTIONS;

  const [answers, setAnswers] = useState<Answers>({});
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState(0);

  const completionCount = getCompletionCount(activeQuestions, answers);
  const partialScore = getPartialScore(activeQuestions, answers);
  const result = getResult(activeQuestions, answers, locale);
  const isResultStep = step >= activeQuestions.length;
  const currentQuestion = !isResultStep ? activeQuestions[step] : null;
  const currentAnswer = currentQuestion ? findOption(activeQuestions, currentQuestion.id, answers[currentQuestion.id]) : null;
  const canAdvance = isResultStep || Boolean(currentQuestion && answers[currentQuestion.id]);
  const progressValue = isResultStep
    ? 100
    : Math.max((completionCount / activeQuestions.length) * 100, (step / activeQuestions.length) * 100);

  const partialRingBg = useMemo(() => scoreRingBackground(partialScore), [partialScore]);
  const resultRingBg = useMemo(() => scoreRingBackground(result?.score ?? 0), [result?.score]);

  const handleSelect = (questionId: string, optionId: string) => {
    setCopied(false);
    setAnswers((current) => ({ ...current, [questionId]: optionId }));
  };

  const handleBack = () => {
    setCopied(false);
    setStep((current) => {
      if (current === 0) {
        return 0;
      }

      if (current > QUESTIONS.length - 1) {
        return QUESTIONS.length - 1;
      }

      return current - 1;
    });
  };

  const handleNext = () => {
    if (!canAdvance) {
      return;
    }

    setCopied(false);
    setStep((current) => (current >= activeQuestions.length - 1 ? activeQuestions.length : current + 1));
  };

  const handleReset = () => {
    setCopied(false);
    setAnswers({});
    setStep(0);
  };

  const handleCopy = async () => {
    if (!result || typeof navigator === "undefined" || !navigator.clipboard) {
      return;
    }

    const text = [
      `UX Score: ${result.score}/100`,
      `${isEN ? 'Status' : 'Estado'}: ${result.status}`,
      `${isEN ? 'Summary' : 'Resumen'}: ${result.summary}`,
      ...result.priorities.map(
        (item, index) => `${index + 1}. ${item.title}: ${item.recommendation} (${item.target})`,
      ),
    ].join("\n");

    await navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <section id="ux-score" className="relative px-6 pb-24 pt-12 md:px-8 md:pb-28 md:pt-16">
      <div className="relative z-10 mx-auto max-w-[1220px]">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F37AA6]">UX Score</p>
          <h2 className="mt-4 text-[2.25rem] font-extrabold leading-[0.98] tracking-[-0.05em] text-gray-900 md:text-[3.4rem]">
            {isEN ? "Phase-by-phase diagnosis." : "Diagnóstico por fases."}
            <br />
            {isEN ? "Clearer, more useful." : "Más claro, más útil."}
          </h2>
          <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-gray-500 md:text-[1.08rem]">
            {isEN
              ? "One question at a time, with context and actionable insights. The goal is to help you detect the main friction without filling the screen with inputs all at once."
              : "Una pregunta por vez, con contexto y lectura accionable. La idea es ayudarte a detectar la fricción principal sin llenar la pantalla de inputs al mismo tiempo."}
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]">
          <div className="rounded-[32px] border border-white/70 bg-white p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-7">
            <div className="mb-6 border-b border-black/6 pb-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold tracking-[-0.03em] text-gray-900">
                    {isResultStep
                      ? (isEN ? "Diagnosis summary" : "Resumen del diagnóstico")
                      : (isEN ? `Phase ${step + 1} of ${activeQuestions.length}` : `Fase ${step + 1} de ${activeQuestions.length}`)}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {isResultStep
                      ? (isEN ? "You already have an initial reading. From here you can review answers or copy the result." : "Ya tenés una lectura inicial. Desde acá podés revisar respuestas o copiar el resultado.")
                      : (isEN ? "Answer one thing at a time. You can go back and change any answer." : "Respondé una sola cosa a la vez. Vas a poder volver y cambiar cualquier respuesta.")}
                  </p>
                </div>
                <div className="rounded-full border border-[#F37AA6]/20 bg-[#F37AA6]/10 px-4 py-2 text-sm font-semibold text-[#cc5d86]">
                  {completionCount}/{activeQuestions.length} {isEN ? "answered" : "completadas"}
                </div>
              </div>

              <div className="mt-5" aria-label="Progreso del UX Score">
                <div className="flex items-center justify-between gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-gray-400">
                  <span>{isEN ? "Overall progress" : "Progreso general"}</span>
                  <span>{Math.round(progressValue)}%</span>
                </div>

                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-black/6">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,#F37AA6_0%,#E0A6D8_55%,#CADEF9_100%)] transition-all duration-300"
                    style={{ width: `${progressValue}%` }}
                  />
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  {activeQuestions.map((question, index) => {
                    const answered = Boolean(answers[question.id]);
                    const active = !isResultStep && index === step;
                    const stateLabel = answered
                      ? (isEN ? "Completed" : "Completada")
                      : active
                        ? (isEN ? "Current" : "Actual")
                        : (isEN ? "Pending" : "Pendiente");

                    return (
                      <div
                        key={question.id}
                        className={`rounded-[18px] border px-3 py-3 transition-colors ${
                          answered
                            ? "border-emerald-200 bg-emerald-50/70"
                            : active
                              ? "border-[#F37AA6]/30 bg-[#F37AA6]/8"
                              : "border-black/6 bg-white/70"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gray-400">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={`rounded-full px-2 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] ${
                              answered
                                ? "bg-emerald-100 text-emerald-700"
                                : active
                                  ? "bg-[#F37AA6]/12 text-[#cc5d86]"
                                  : "bg-black/5 text-gray-500"
                            }`}
                          >
                            {stateLabel}
                          </span>
                        </div>
                        <p className="mt-2 text-sm font-semibold text-gray-900">
                          {question.eyebrow.replace(/\d+ · /, "")}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {!isResultStep && currentQuestion ? (
              <div>
                <fieldset className="border-0">
                  <legend className="w-full">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gray-400">{currentQuestion.eyebrow}</p>
                    <h4 className="mt-2 text-[1.6rem] font-bold leading-tight tracking-[-0.04em] text-gray-900 md:text-[1.85rem]">
                      {currentQuestion.prompt}
                    </h4>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-500">{currentQuestion.helper}</p>
                  </legend>

                  <div className="mt-6 grid gap-3">
                    {currentQuestion.options.map((option) => {
                      const optionId = `${currentQuestion.id}-${option.id}`;
                      const selected = answers[currentQuestion.id] === option.id;

                      return (
                        <label
                          key={option.id}
                          htmlFor={optionId}
                          className={`block cursor-pointer rounded-[22px] border px-4 py-4 transition-all ${
                            selected
                              ? "border-[#F37AA6]/40 bg-[#F37AA6]/10 shadow-[0_10px_30px_rgba(243,122,166,0.12)]"
                              : "border-black/8 bg-white hover:border-[#E0A6D8]/50 hover:bg-[#faf6fb]"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <input
                              id={optionId}
                              type="radio"
                              name={currentQuestion.id}
                              value={option.id}
                              checked={selected}
                              onChange={() => handleSelect(currentQuestion.id, option.id)}
                              className="mt-1 h-4 w-4 accent-[#F37AA6]"
                            />
                            <div>
                              <p className="font-semibold text-gray-900">{option.label}</p>
                              <p className="mt-1 text-sm leading-relaxed text-gray-500">{option.detail}</p>
                            </div>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="mt-6 rounded-[26px] border border-black/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,247,252,0.92))] p-5">
                  <h5 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">{isEN ? "Why this question matters" : "Qué estamos mirando acá"}</h5>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{currentQuestion.whyItMatters}</p>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-[#cc5d86]">{currentQuestion.tip}</p>

                  {currentAnswer ? (
                    <div className="mt-4 rounded-[20px] border border-[#F37AA6]/18 bg-white p-4">
                      <p className="text-sm font-semibold text-gray-900">{isEN ? "Your current answer:" : "Tu respuesta actual:"} {currentAnswer.areaLabel}</p>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600">{currentAnswer.recommendation}</p>
                    </div>
                  ) : null}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 0}
                    className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-black/20 hover:text-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {isEN ? "Back" : "Volver"}
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!canAdvance}
                    className="rounded-full bg-[#F37AA6] px-5 py-3 text-sm font-semibold text-gray-900 shadow-md transition-colors hover:bg-[#e0658f] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {step === activeQuestions.length - 1 ? (isEN ? "See result" : "Ver resultado") : (isEN ? "Next phase" : "Siguiente fase")}
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid gap-4">
                {activeQuestions.map((question) => {
                  const selected = findOption(activeQuestions, question.id, answers[question.id]);

                  return (
                    <article key={question.id} className="rounded-[24px] border border-black/6 bg-white/85 p-5">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gray-400">{question.eyebrow}</p>
                      <h4 className="mt-2 text-lg font-bold tracking-[-0.03em] text-gray-900">{question.prompt}</h4>
                      <p className="mt-3 text-sm leading-relaxed text-gray-600">{selected?.label ?? (isEN ? "Without answer" : "Sin responder")}</p>
                      {selected ? <p className="mt-2 text-sm leading-relaxed text-gray-500">{selected.detail}</p> : null}
                    </article>
                  );
                })}

                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-black/20 hover:text-gray-900"
                  >
                    {isEN ? "Edit answers" : "Editar respuestas"}
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-black/20 hover:text-gray-900"
                  >
                    {isEN ? "Start over" : "Empezar de nuevo"}
                  </button>
                </div>
              </div>
            )}
          </div>

          <aside
            aria-live="polite"
            className="rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,#ffffff,#faf7fc)] p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-7"
          >
            <div className="flex items-center justify-between gap-4 border-b border-black/6 pb-5">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gray-400">
                  {isResultStep ? (isEN ? "Result" : "Resultado") : (isEN ? "Current progress" : "Lectura guiada")}
                </p>
                <h3 className="mt-2 text-xl font-bold tracking-[-0.03em] text-gray-900">
                  {isResultStep ? (isEN ? "Your quick diagnosis" : "Tu diagnóstico rápido") : (isEN ? "What this phase means" : "Qué significa esta fase")}
                </h3>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:border-black/20 hover:text-gray-900"
              >
                {isEN ? "Restart" : "Reiniciar"}
              </button>
            </div>

            {!isResultStep ? (
              <div className="mt-6 grid gap-5">
                <div className="flex items-center gap-5 rounded-[28px] border border-black/6 bg-white/80 p-5">
                  <div
                    className="grid h-[110px] w-[110px] place-items-center rounded-full"
                    style={{ background: partialRingBg }}
                  >
                    <div className="grid h-[84px] w-[84px] place-items-center rounded-full bg-white text-center shadow-inner">
                      <div>
                        <div className="text-[1.65rem] font-extrabold leading-none text-gray-900">{completionCount}</div>
                        <div className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gray-400">de 3</div>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#cc5d86]">{isEN ? "Current progress" : "Progreso actual"}</p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                      {completionCount === 0
                        ? (isEN ? "No reading yet. Start with the first phase and we'll build the diagnosis together." : "Todavía no hay lectura. Empezá por la primera fase y vamos construyendo el diagnóstico juntos.")
                        : (isEN ? `We already have a partial signal of ${partialScore}/100 with ${completionCount} answer${completionCount === 1 ? "" : "s"}.` : `Ya tenemos una señal parcial de ${partialScore}/100 con ${completionCount} respuesta${completionCount === 1 ? "" : "s"}.`)}
                    </p>
                  </div>
                </div>

                {currentQuestion ? (
                  <div className="rounded-[28px] border border-black/6 bg-white/72 p-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">{isEN ? "Why this question matters" : "Por qué esta pregunta importa"}</h4>
                    <p className="mt-4 text-sm leading-relaxed text-gray-600">{currentQuestion.whyItMatters}</p>
                    <p className="mt-4 rounded-[18px] border border-[#F37AA6]/16 bg-[#F37AA6]/8 px-4 py-3 text-sm leading-relaxed text-gray-700">
                      {currentQuestion.tip}
                    </p>
                  </div>
                ) : null}

                <div className="rounded-[28px] border border-black/6 bg-white/72 p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">{isEN ? "What's being evaluated overall" : "Qué se evalúa en total"}</h4>
                  <div className="mt-4 grid gap-3">
                    {activeQuestions.map((question) => {
                      const answered = Boolean(answers[question.id]);
                      const active = currentQuestion?.id === question.id;

                      return (
                        <div
                          key={question.id}
                          className={`rounded-[18px] border px-4 py-3 ${
                            active
                              ? "border-[#F37AA6]/30 bg-[#F37AA6]/8"
                              : answered
                                ? "border-emerald-200 bg-emerald-50/70"
                                : "border-black/6 bg-white"
                          }`}
                        >
                          <p className="text-sm font-semibold text-gray-900">{question.eyebrow.replace(/\d+ · /, "")}</p>
                          <p className="mt-1 text-sm leading-relaxed text-gray-500">{question.prompt}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : result ? (
              <div className="mt-6">
                <div className="flex items-center gap-5 rounded-[28px] border border-black/6 bg-white/80 p-5">
                  <div
                    className="grid h-[110px] w-[110px] place-items-center rounded-full"
                    style={{ background: resultRingBg }}
                  >
                    <div className="grid h-[84px] w-[84px] place-items-center rounded-full bg-white text-center shadow-inner">
                      <div>
                        <div className="text-[1.65rem] font-extrabold leading-none text-gray-900">{result.score}</div>
                        <div className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gray-400">score</div>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className={`text-sm font-semibold uppercase tracking-[0.18em] ${result.statusTone}`}>{result.status}</p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{result.summary}</p>
                  </div>
                </div>

                <div className="mt-5 rounded-[28px] border border-black/6 bg-white/72 p-5">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">{isEN ? "Suggested priorities" : "Prioridades sugeridas"}</h4>
                  <div className="mt-4 grid gap-3">
                    {result.priorities.map((item) => (
                      <div key={item.title} className="rounded-[20px] border border-black/6 bg-white p-4">
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.recommendation}</p>
                        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#cc5d86]">{item.target}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="rounded-full bg-[#F37AA6] px-5 py-3 text-sm font-semibold text-gray-900 shadow-md transition-all hover:bg-[#e0658f]"
                  >
                    {copied ? (isEN ? "Diagnosis copied" : "Diagnóstico copiado") : (isEN ? "Copy diagnosis" : "Copiar diagnóstico")}
                  </button>
                  <a
                    href="#contacto"
                    className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-black/20 hover:text-gray-900"
                  >
                    {isEN ? "I want a full analysis" : "Quiero análisis completo"}
                  </a>
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </section>
  );
}