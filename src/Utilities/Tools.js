export function nCompare(str1, str2) {
  if (!str1.length)
    return (false)
  for (var i = 0; i < str1.length; i++)
    if (str1[i] !== str2[i])
      return (false);
  return (true);
}

export function splitSpaces(str) {
  var result = [];
  var tmp = "";

  if (!str)
    return (null);
  for (var i = 0; i < str.length; i++)
  {
    if (str[i] !== ' ')
      tmp += str[i];
    else
    {
      result.push(tmp);
      tmp = "";
    }
  }
  result.push(tmp);
  return (result)
}

export default nCompare;
