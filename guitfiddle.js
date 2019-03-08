$(document).ready(function(){
    $('#reset').on('click', function(){
        location.reload();
    });
    $('#submit').on('click', function(){
        var maj = $('#majKey').val();
        var min = String($('#minKey').val());
        var sNum = String($('#sharpNum').val());
        var fNum = String($('#flatNum').val());
        
        //get maj key
        switch (maj) {
                //sharps
            case 'a':
                //alert("3 sharps");
                $('.showKey').html("The key of A Major has 3 sharps: F&#9839;, C&#9839;, and G&#9839;.");
                break;
            case 'A':
                //alert("3 sharps");
                $('.showKey').html("The key of A Major has 3 sharps: F&#9839;, C&#9839;, and G&#9839;.");
                break;
            case 'b':
                //alert("5 sharps");
                $('.showKey').html("The key of B Major has 5 sharps: F&#9839;, C&#9839;, G&#9839;, D&#9839;, and A&#9839;.");
                break;
            case 'B':
                //alert("5 sharps");
                $('.showKey').html("The key of B Major has 5 sharps: F&#9839;, C&#9839;, G&#9839;, D&#9839;, and A&#9839;.");
                break;
            case 'c':
                //alert("0");
                $('.showKey').html("The key of C Major has 0 sharps and 0 flats.  All notes are natural.");
                break;
            case 'C':
                //alert("0");
                $('.showKey').html("The key of C Major has 0 sharps and 0 flats.  All notes are natural.");
                break;
            case 'd':
                $('.showKey').html("The key of D Major has 2 sharps: F&#9839; and C&#9839;.");
                break;
            case 'D':
                $('.showKey').html("The key of D Major has 2 sharps: F&#9839; and C&#9839;.");
                break;
            case'e':
                $('.showKey').html("The key of E Major has 4 sharps: F&#9839;, C&#9839;, G&#9839;, and D&#9839;.");
                break;
            case'E':
                $('.showKey').html("The key of E Major has 4 sharps: F&#9839;, C&#9839;, G&#9839;, and D&#9839;.");
                break;
            case'f#':
                $('.showKey').html("The key of F&#9839; Major has 6 sharps: F&#9839;, C&#9839;, G&#9839;, D&#9839;, A&#9839;, and E&#9839;.");
                break;
            case'F#':
                $('.showKey').html("The key of F&#9839; Major has 6 sharps: F&#9839;, C&#9839;, G&#9839;, D&#9839;, A&#9839;, and E&#9839;.");
                break;
            case'g':
                $('.showKey').html("The key of G Major has 1 sharp: F&#9839;.");
                break;
            case'G':
                $('.showKey').html("The key of G Major has 1 sharp: F&#9839;.");
                break;
            case'c#':
                $('.showKey').html("The key of C# Major has 7 sharps: F&#9839;, C&#9839;, G&#9839;, D&#9839;, A&#9839;, E&#9839;, and B&#9839;. All notes are sharp.");
                break;
            case'C#':
                case'c#':
                $('.showKey').html("The key of C# Major has 7 sharps: F&#9839;, C&#9839;, G&#9839;, D&#9839;, A&#9839;, E&#9839;, and B&#9839;. All notes are sharp.");
                break;
                
                //flats
                
            case 'f':
                $('.showKey').html("The key of F Major has 1 flat: B&#9837;.");
                break;
            case 'F':
                $('.showKey').html("The key of F Major has 1 flat: B&#9837;.");
                break;
            case 'bb':
                $('.showKey').html("The key of B&#9837; Major has 2 flats: B&#9837; and E&#9837;.");
                break;
            case 'Bb':
                $('.showKey').html("The key of B &#9837; Major has 2 flats: B &#9837; and E &#9837;.");
                break;
            case 'eb':
                $('.showKey').html("The key of E&#9837; Major has 3 flats: B&#9837;, E&#9837; and A&#9837;.");
                break;
            case 'Eb':
                $('.showKey').html("The key of E&#9837; Major has 3 flats: B&#9837;, E&#9837; and A&#9837;.");
                break;
            case 'ab':
                $('.showKey').html("The key of A&#9837; Major has 4 flats: B&#9837;, E&#9837;, A&#9837; and D&#9837;.");
                break;
            case 'Ab':
                $('.showKey').html("The key of A&#9837; Major has 4 flats: B&#9837;, E&#9837;, A&#9837; and D&#9837;.");
                break;
            case 'db':
                $('.showKey').html("The key of D&#9837; Major has 5 flats: B&#9837;, E&#9837;, A&#9837;, D&#9837; and G&#9837;.");
                break;
            case 'Db':
                $('.showKey').html("The key of D&#9837; Major has 5 flats: B&#9837;, E&#9837;, A&#9837;, D&#9837; and G&#9837;.");
                break;
            case 'gb':
                $('.showKey').html("The key of G&#9837; Major has 6 flats: B&#9837;, E&#9837;, A&#9837;, D&#9837;, G&#9837; and C&#9837;.");
                break;
            case 'Gb':
                $('.showKey').html("The key of G&#9837; Major has 6 flats: B&#9837;, E&#9837;, A&#9837;, D&#9837;, G&#9837; and C&#9837;.");
                break;
            case 'cb':
                $('.showKey').html("The key of Cb Major has 7 flats: B&#9837;, E&#9837;, A&#9837;, D&#9837;, G&#9837;, C&#9837; and F&#9837;. All notes are flat.");
                break;
            case 'Cb':
                $('.showKey').html("The key of Cb Major has 7 flats: B&#9837;, E&#9837;, A&#9837;, D&#9837;, G&#9837;, C&#9837; and F&#9837;. All notes are flat.");
                break;
            default:
                $('.showKey').html("Please enter a valid key.");
        }//end maj switch
        
        //get min key
        switch (min) {
                //sharps
            case 'a':
                $('.showKey').html("The key of a minor has 0 sharps and 0 flats. The harmonic minor has G#, and the ascending melodic minor has F# and G#.  It is relative to the key of C Major.");
                break;
            case 'A':
                $('.showKey').html("The key of a minor has 0 sharps and 0 flats. The harmonic minor has G#, and the ascending melodic minor has F# and G#.  It is relative to the key of C Major.");
                break;
            case 'e':
                $('.showKey').html("The key of e minor has 1 sharp: F&#9839;. The harmonic minor has D&#9839;, and the ascending melodic minor has C&#9839; and D&#9839;.  It is relative to the key of G Major.");
                break;
            case 'E':
                $('.showKey').html("The key of e minor has 1 sharp: F&#9839;. The harmonic minor has D&#9839;, and the ascending melodic minor has C&#9839; and D&#9839;.  It is relative to the key of G Major.");
                break;
            case 'b':
                $('.showKey').html("The key of b minor has 2 sharps: F&#9839; and C&#9839;. The harmonic minor has A&#9839;, and the ascending melodic minor has G&#9839; and A&#9839;.  It is relative to the key of D Major.");
                break;
            case 'B':
                $('.showKey').html("The key of b minor has 2 sharps: F&#9839; and C&#9839;. The harmonic minor has A&#9839;, and the ascending melodic minor has G&#9839; and A&#9839;.  It is relative to the key of D Major.");
                break;
            case 'f#':
                $('.showKey').html("The key of f&#9839; minor has 3 sharps: F&#9839;, C&#9839; and G&#9839;. The harmonic minor has E&#9839;, and the ascending melodic minor has D&#9839; and E&#9839;.  It is relative to the key of A Major.");
                break;
            case 'F#':
                $('.showKey').html("The key of f&#9839; minor has 3 sharps: F&#9839;, C&#9839; and G&#9839;. The harmonic minor has E&#9839;, and the ascending melodic minor has D&#9839; and E&#9839;.  It is relative to the key of A Major.");
                break;
            case 'c#':
                $('.showKey').html("The key of c&#9839; minor has 4 sharps: F&#9839;, C&#9839;, G&#9839; and D&#9839;. The harmonic minor has B&#9839;, and the ascending melodic minor has A&#9839; and B&#9839;.  It is relative to the key of E Major.");
                break;
            case 'C#':
                $('.showKey').html("The key of c&#9839; minor has 4 sharps: F&#9839;, C&#9839;, G&#9839; and D&#9839;. The harmonic minor has B&#9839;, and the ascending melodic minor has A&#9839; and B&#9839;.  It is relative to the key of E Major.");
                break;
            case 'g#':
                $('.showKey').html("The key of g&#9839; minor has 5 sharps: F&#9839;, C&#9839;, G&#9839;, D&#9839; and A&#9839;. The harmonic minor has F&#119082;, and the ascending melodic minor has E&#119082; and F&#119082;.  It is relative to the key of B Major.");
                break;
            case 'G#':
                $('.showKey').html("The key of g&#9839; minor has 5 sharps: F&#9839;, C&#9839;, G&#9839;, D&#9839; and A&#9839;. The harmonic minor has F&#119082;, and the ascending melodic minor has E&#119082; and F&#119082;.  It is relative to the key of B Major.");
                break;
                
                
        }//end minor switch
    });
    
});//end main doc ready