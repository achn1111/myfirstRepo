let playlist = [ {
  'title': 'When You Say Nothing At All by Ronan Keating',
  'audio': "assets/songs/Ronan Keating - When You Say Nothing At All.mp3",
},{
  'title': 'အတောင်ပံပါရင် မင်းဆီကို by Yin Go',
  'audio': "assets/songs/wings pr yin min si ko -Yi.n Go.mp3",
},{
  'title': 'ကြည်ဖြူမယ်ဆိုရင် by Hlwan Paing & Yaw Min Oo',
  'audio': "assets/songs/လွှမ်းပိုင် , ယောမင်းဦး - ကြည်ဖြူမယ်ဆိုရင်.mp3",
},{
  'title': 'Dive by Ed Sheeran',
  'audio': "assets/songs/Dive - Ed Sheeran.mp3",
},
{
  'title': 'သိင်္ဂါရသီချင်းတစ်ပုဒ်  by Sai Sai Kham Leng  ',
  'audio': "assets/songs/သိင်္ဂါရသီချင်းတစ်ပုဒ် (Theingara Tha Chin Ta Bote) - Sai Sai Kham Leng Feat. Mg Mg Pyae Sone).mp3",
},{
  'title': 'Demons by Imagine Dragons',
  'audio': "assets/songs/Demons - Imagine Dragons.mp3",
}, {
  'title': 'မောင့်လပြည့်ဝန်း by Bo Phyu',
  'audio': "assets/songs/မောင့်လပြည့်ဝန်း - ဘိုဖြူ.mp3",
},{
  'title': 'Happier by Ed Sheeran',
  'audio': "assets/songs/Ed Sheeran - Happier (Official Video).mp3",
},
 {
  'title': 'ရည်းစားစာ by Sai Sai Kham Leng',
  'audio': "assets/songs/Sai Sai Kham Leng- Yee Zar Sar.mp3",
},
{
  'title': 'Love Yourself by Justin Bieber',
  'audio': "assets/songs/Justin Bieber - Love Yourself.mp3",
}, {
  'title': 'Perfect by Ed Sheeran',
  'audio': "assets/songs/Perfect - Ed Sheeran.mp3",
},
{
  'title': '၀တ်မှုန်  by Khin Mg Toe',
  'audio': "assets/songs/wutMhone - KhinMgToe.mp3",
},
{
  'title': "It's You by Ali Gatie",
  'audio': "assets/songs/Ali Gatie - It s You (Official).mp3",
},
{
  'title': "ဒီထက်ပိုပြီး မတတ်နိုင်ဘူး by Sai Htee Saing ",
  'audio': "assets/songs/d htet po pe ma tat nai vuu-Sai Htee Saing.mp3",
},{
  'title': "၀မ်းနည်းမှတ်တမ်း by Sai Sai Kham Leng",
  'audio': "assets/songs/Sai Sai Kham Hlaing - Wan Nae Mar Tan.mp3",
},
 {
  'title': 'That Should Be Me by Justin Bieber',
  'audio': "assets/songs/That Should Be Me - Justin Bieber + (My World 2.0 Studio Version) (1).mp3",
},
{
  'title': "အရင်အတိုင်းရန်ကုန် by Big Bag",
  'audio': "assets/songs/Big Bag - ayin a tai Yangon.mp3",
}];
i = 0;
n = playlist.length;
let player = document.getElementById( 'player' );
let dur = document.getElementById( 'dur' );
playlist.forEach( function( i ) {
  console.log( i.audio )
  player.src = i.audio;
  $( '.title' ).html( i.title );
}, );

function calculateTotalValue( length ) {
  let minutes = Math.floor( length / 60 ),
    seconds_int = length - minutes * 60,
    seconds_str = seconds_int.toString( ),
    seconds = seconds_str.substr( 0, 2 ),
    time = minutes + ':' + seconds
  return time;
}

function calculateCurrentValue( currentTime ) {
  let current_hour = parseInt( currentTime / 3600 ) % 24,
    current_minute = parseInt( currentTime / 60 ) % 60,
    current_seconds_long = currentTime % 60,
    current_seconds = current_seconds_long.toFixed( ),
    current_time = ( current_minute < 10 ? "0" + current_minute : current_minute ) + ":" + ( current_seconds < 10 ? "0" + current_seconds : current_seconds );
  return current_time;
}

function initProgressBar( ) {
  let length = player.duration;
  let current_time = player.currentTime;
  let totalLength = calculateTotalValue( length )
  jQuery( ".end-time" ).html( totalLength );
  let currentTime = calculateCurrentValue( current_time );
  jQuery( ".start-time" ).html( currentTime );
  dur.value = player.currentTime;
  if ( player.currentTime == player.duration ) {
    $( "#play-btn" ).fadeIn( "slow", function( ) {
      $( this ).removeClass( "fa-pause" );
      $( this ).addClass( "fa-play" );
      dur.value = 0;
    } );
  }
};

function mSet( ) {
  player.currentTime = dur.value;
}

function mDur( ) {
  let length = player.duration;
  dur.max = length;
}

function initPlayers( num ) {
  for ( let i = 0; i < num; i++ ) {
    ( function( ) {
      let playerContainer = document.getElementById( 'player-container' ),
        player = document.getElementById( 'player' ),
        isPlaying = false,
        playBtn = document.getElementById( 'play-btn' );
      if ( playBtn != null ) {
        playBtn.addEventListener( 'click', function( ) {
          togglePlay( )
        } );
      }

      function togglePlay( ) {
        if ( player.paused === false ) {
          player.pause( );
          isPlaying = false;
          $( "#play-btn" ).fadeIn( "slow", function( ) {
            $( this ).removeClass( "fa-pause" );
            $( this ).addClass( "fa-play" );
          } );
        }
        else {
          player.play( );
          $( "#play-btn" ).fadeIn( "slow", function( ) {
            $( this ).removeClass( "fa-play" );
            $( this ).addClass( "fa-pause" );
          } );
          isPlaying = true;
        }
      }
    }( ) );
  }
}
$( "#next" ).data( 'dir', 1 );
$( "#prev" ).data( 'dir', -1 );
$( '#next, #prev' ).on( 'click', function( ) {
  i = ( i + $( this ).data( 'dir' ) + n ) % n;
  console.log( i );
  player.src = playlist[ i ].audio;
  $( '.title' ).html( playlist[ i ].title );
  $( '#play-btn' ).removeClass( "fa-play" );
  $( '#play-btn' ).addClass( "fa-pause" );
  player.play( );
} );
$( ".audio-player" )
  .toArray( )
  .forEach( function( player ) {
    let audio = $( player ).find( "audio" )[ 0 ];
    let volumeControl = $( player ).find( ".volumeControl .wrapper" );
    volumeControl.find( ".outer" ).on( "click", function( e ) {
      let volumePosition = e.pageX - $( this ).offset( ).left;
      let audioVolume = volumePosition / $( this ).width( );
      if ( audioVolume >= 0 && audioVolume <= 1 ) {
        audio.volume = audioVolume;
        $( this )
          .find( ".inner" )
          .css( "width", audioVolume * 100 + "%" );
      }
    } );
  } );
$( function( ) {
  // Dropdown toggle
  $( '.dropdown-toggle' ).click( function( ) {
    $( this ).next( '.dropdown' ).slideToggle( "fast" );
  } );
  $( document ).click( function( e ) {
    var target = e.target;
    if ( !$( target ).is( '.dropdown-toggle' ) && !$( target ).parents( ).is( '.dropdown-toggle' ) ) {
      $( '.dropdown' ).hide( );
    }
  } );
} );
$( '#darkButton' ).click( switchDark );
$( '#whiteButton' ).click( switchWhite );
$( '#blueButton' ).click( switchBlue );

function switchDark( ) {
  $( '#skin' ).attr( 'class', 'dark audio-player' );
  $( '.inner' ).css( 'background', '#fff' );
  $( '.title' ).css( 'color', '#fff' );
  $( '.time' ).css( 'color', '#fff' );
  $( '.fa-volume-up' ).css( {
    'color': '#fff'
  } );
  $( '.audio-player #play-btn' ).css( {
    'color': '#fff',
    'border-color': '#fff'
  } );
  $( '.ctrl_btn' ).css( {
    'color': '#fff',
    'border-color': '#fff'
  } );
}

function switchWhite( ) {
  $( '#skin' ).attr( 'class', 'white audio-player' );
  $( '.inner' ).css( 'background', '#555' );
  $( '.title' ).css( 'color', '#555' );
  $( '.time' ).css( 'color', '#555' );
  $( '.fa-volume-up' ).css( {
    'color': '#555'
  } );
  $( '.audio-player #play-btn' ).css( {
    'color': '#555',
    'border-color': '#555'
  } );
  $( '.ctrl_btn' ).css( {
    'color': '#555',
    'border-color': '#555'
  } );
}

function switchBlue( ) {
  $( '#skin' ).attr( 'class', 'blue audio-player' );
  $( '.inner' ).css( 'background', '#fff' );
  $( '.title' ).css( 'color', '#fff' );
  $( '.time' ).css( 'color', '#fff' );
  $( '.fa-volume-up' ).css( {
    'color': '#fff'
  } );
  $( '.audio-player #play-btn' ).css( {
    'color': '#fff',
    'border-color': '#fff'
  } );
  $( '.ctrl_btn' ).css( {
    'color': '#fff',
    'border-color': '#fff'
  } );
}
initPlayers( jQuery( '#player-container' ).length );
