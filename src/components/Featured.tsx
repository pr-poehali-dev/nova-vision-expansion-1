export default function Featured() {
  const requirements = [
    "Шрифт Times New Roman, кегль 14, интервал 1,5",
    "Поля: левое 2,5 см; остальные 1,5 см",
    "Оглавление с указанием страниц",
    "Введение: актуальность, цели, задачи, результат",
    "Глава I — теория. Глава II — практика. Заключение",
    "Список источников в алфавитном порядке",
  ];

  return (
    <div id="about" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/desk.png"
          alt="Рабочее место ученика"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">
          Требования к оформлению
        </h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Проектная работа выполняется в Word и сдаётся руководителю за неделю до защиты.
        </p>
        <ul className="space-y-3 mb-8">
          {requirements.map((req, i) => (
            <li key={i} className="flex items-start gap-3 text-neutral-700 text-sm">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
              {req}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
        >
          Связаться с руководителем
        </a>
      </div>
    </div>
  );
}
