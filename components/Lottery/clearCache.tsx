import useLotteryStore from "@/store/ProviderData";

const { clearBorlette, clearLotto3, clearLotto4, clearLotto5, clearMariage } =
  useLotteryStore((state) => ({
    clearBorlette: state.clearBorlette,
    clearLotto3: state.clearLotto3,
    clearLotto4: state.clearLotto4,
    clearLotto5: state.clearLotto5,
    clearMariage: state.clearMariage,
  }));
const clearCache = () => {
  clearBorlette();
  clearLotto3();
  clearLotto4();
  clearLotto5();
  clearMariage();
};

export default clearCache;
