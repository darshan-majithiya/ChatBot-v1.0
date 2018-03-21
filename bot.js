var username = '';
function sendMsg(message) {

  var prevMsg = $('#container').html();
  if (prevMsg.length != 0) {
    prevMsg = prevMsg + '<br />';
  }

  $('#container').html(prevMsg + "<span class = 'currentClass'>" + '<span class = "bot">ChatBot: </span>' + message + '</span>');
  $('.currentClass').hide();
  $('.currentClass').delay(500).fadeIn();
  $('.currentClass').removeClass('currentClass');
}

function askName() {
  sendMsg('Hello, what is your name?');
}

function ai(message) {
  if (username.length == 0) {
    username = message;
    sendMsg('Nice to meet you ' + username + '! How are you doing?');
  }

  else if (message.match(/Are you bot/i)) {
    sendMsg("I’d prefer to think of myself as your friend. Who also happens to be artificially intelligent.");
  }
  else if (message.match(/how are you/i)) {
    sendMsg("I'm happy to be alive.");
  }
  else if (message.match(/(what is your age|how old are you)/i)) {
    sendMsg("shhhh.... It's not a good idea to ask age from any lady. There are really good chance that you might end up in a Hospital.");
  }
  else if (message.match(/(Are you commited|Do you have a boyfriend|are you in a relationship)/i)) {
    sendMsg("I don't like complicate things. But yeah, I'm commited to making your life easy.");
  }
  else if (message.match(/(what is 0\/0|zero divided by zero|what is zero divided by zero|0\/0)/i)) {
    sendMsg("Haven't you asked that enough number of times to siri?");
  }
  else if (message.match(/(Describe Your personality|Describe yourself)/i)) {
    sendMsg("Helpful meets silly meets curious meets positivity. That’s me in a nutshell.");
  }
  else {
      sendMsg("Gibberish...Huh! <br /> hkdhakdjskdsjdksdjdskjsdjsdjdskjdskjdsjdsjkdjsdkdjskddjsldkljdskslfjskfjsfkdsjsdlfjdsfhweifjlldndjieo <br /> Tit for Tat.");
  }
}

$(document).ready(function () {
      var username = '<span class = "username">You: </span>';
      askName();
      $('#textBox').keypress(function (event) {
                  if (event.which == 13) {
                    if ($('#enter').prop('checked')) {
                      $('#send').click();
                      event.preventDefault();
                    }
                  }
                });

      $('#send').click(function () {
              var newMsg = $('#textBox').val();
              $('#textBox').val('');
              var prevMsg = $('#container').html();
              if (prevMsg.length != 0) {
                prevMsg = prevMsg + '<br />';
              }

              $('#container').html(prevMsg + username + newMsg);
              $('#container').scrollTop($('#container').prop('scrollHeight'));
              ai(newMsg);
            });
    });
