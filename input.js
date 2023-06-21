rl._writeToOutput = function _writeToOutput(stringToWrite) {
  if (rl.stdoutMuted && stringToWrite !== '\r\n' && stringToWrite !== '\n' && stringToWrite !== '\r')
    rl.output.write('*');
  else rl.output.write(stringToWrite);
};

rl.input.on('keypress', (character, key) => {
  if (key && key.name === 'escape') {
    rl.close();
    console.log('\nОстановлено пользователем.');
    process.exit();
  }
});
