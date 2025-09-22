import { createComparison, rules } from "../lib/compare.js";

export function initSearching(searchField) {
  // Создаем компаратор с нужными правилами
  const comparisonRules = {
    skipEmptyTargetValues: true,
    searchMultipleFields: rules.searchMultipleFields(
      searchField,
      ["date", "customer", "seller"], // передаем массив полей
      false
    ),
  };

  const compare = createComparison(comparisonRules);

  return (data, state, action) => {
    // Получаем поисковый запрос
    const searchTerm = (state.searchTerm || "").trim().toLowerCase();

    // Если поиск пустой, возвращаем все данные
    if (!searchTerm) {
      return data;
    }

    // Фильтруем данные с помощью компаратора
    return data.filter((item) => {
      try {
        return compare(item, searchTerm);
      } catch (error) {
        console.error("Ошибка при сравнении:", error);
        return false;
      }
    });
  };
}
