export default function UtilsLinkTratament(link) {
  const regex = /^(http:\/\/|https:\/\/|ftp:\/\/)/;

  if (!regex.test(link)) {
    return "http://" + link;
  }

  return link;
}
