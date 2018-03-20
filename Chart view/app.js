const SerialPort = require('serialport');
var parsers = SerialPort.parsers;
var port = new SerialPort('/dev/tty-usbserial1', {
    baudRate: 57600
});

port.on( "data", function( chunk ) {
    sys.puts(chunk);
});

port.on( "error", function( msg ) {
    sys.puts("error: " + msg );
});