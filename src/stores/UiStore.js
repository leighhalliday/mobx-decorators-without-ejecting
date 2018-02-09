import { action, observable } from "mobx";

class UiStore {
  @observable theme = "day";

  @action
  toggleTheme = () => {
    this.theme = this.theme === "day" ? "night" : "day";
  };
}

export default new UiStore();
