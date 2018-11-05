function TestPunycodeNodeJs(req, resp) {
  const punycode  = PunycodeNodeJs();
  const example1 = punycode.encode('mañana'); // 'maana-pta'
  const example2 = punycode.encode('☃-⌘'); // '--dqo34k'
  const decodeExample1 = punycode.decode('maana-pta'); // 'mañana'
  const decodeExample2 = punycode.decode('--dqo34k'); // '☃-⌘'
  log("Encoding Examples:");
  log(example1);
  log(example2);
  log("Decoding Examples");
  log(decodeExample1);
  log(decodeExample2);
  resp.success('Success');
}
