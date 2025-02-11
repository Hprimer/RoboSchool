import React, { useState } from 'react';

function PhoneInput() {
  const [phone, setPhone] = useState("");
  const [placeholder, setPlaceholder] = useState("Телефон");

  // Функция для смены placeholder на шаблон
  const showTemplate = () => {
    setPlaceholder("+7(___)___-__-__");
  };

  // Функция для возврата стандартного placeholder
  const hideTemplate = () => {
    if (phone === "") {
      setPlaceholder("Телефон");
    }
  };

  // Фильтрация ввода: разрешаем только цифры
  const handleChange = (e) => {
    const onlyNums = e.target.value.replace(/\D/g, "");
    setPhone(onlyNums);
  };

  return (
    <input
      type="tel"
      className="form-control"
      placeholder={placeholder}
      value={phone}
      onFocus={showTemplate}  // При фокусе показываем шаблон
      onBlur={hideTemplate}    // При потере фокуса возвращаем "Телефон", если поле пустое
      onMouseEnter={showTemplate} // При наведении показываем шаблон
      onMouseLeave={hideTemplate} // При уходе мыши возвращаем "Телефон", если поле пустое
      onChange={handleChange}
      inputMode="numeric" // Открывает цифровую клавиатуру на мобильных
    />
  );
}

export default PhoneInput;
