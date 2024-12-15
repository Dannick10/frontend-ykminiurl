import moment from "moment";
import "moment-timezone";
import "moment/locale/pt-br";

export const formatRelativeTime = (utcDate: string | undefined): string => {


  if(!utcDate) {
    return "Não foi possivel capturar a data"
  }

  const localDate = moment().locale("pt-br").format("LLL");

  return localDate;
};
