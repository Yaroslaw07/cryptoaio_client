const isValidJson = (json: string) => {
  return /^[\],:{}\s]*$/.test(
    json
      .replace(/\\["\\\/bfnrtu]/g, "@")
      .replace(
        /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        "]"
      )
      .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
  );
};

export default isValidJson;
