export default (code) => {
  switch (code) {
    case '23505':
      return 'Esse email já está cadastrado no sistema.';
      break;
    default:
      return 'Erro ao se comunicar com servidor. Por favor tente mais tarde.';
      break;
  }
};
