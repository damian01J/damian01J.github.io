

        $(document).ready(function(){
                $( ".target0" ).click(function() {
                  $( ".ding0" ).toggle( "slow" );
                });
                $( ".target1" ).click(function() {
                  $( ".ding1" ).toggle( "slow" );
                });
                $( ".target2" ).click(function() {
                  $( ".ding2" ).toggle( "slow" );
                });
                $( ".target3" ).click(function() {
                  $( ".ding3" ).toggle( "slow" );
                });
                $( ".target4" ).click(function() {
                  $( ".ding4" ).toggle( "slow" );
                });
                $( ".targ" ).click(function() {
                  $( ".ding" ).toggle( "slow" );
                });
                $( ".target5" ).click(function() {
                  $( ".ding5" ).toggle( "slow" );
                });


                $(".home, .about, .pro, .whatI").click(function() {
                  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
                  && location.hostname == this.hostname) {
                    var $target = $(this.hash);
                    $target = $target.length && $target
                    || $('[name=' + this.hash.slice(1) +']');
                    if ($target.length) {
                      var targetOffset = $target.offset().top;
                      $('html,body')
                      .animate({scrollTop: targetOffset}, 1000);
                     return false;
                    }
                  }
                });

                $( ".click55" ).click(function() {
                  $( ".ding5" ).fadeIn(1400);
                });



                $( "#click0" ).click(function() {
                            $( ".ding0" ).toggle( "slow" );
                });
                $( "#click1" ).click(function() {
                            $( ".ding1" ).toggle( "slow" );;
                });
                $( "#click2" ).click(function() {
                            $( ".ding2" ).toggle( "slow" );
                });
                $( "#click3" ).click(function() {
                            $( ".ding3" ).toggle( "slow" );;
                });
                $( "#click4" ).click(function() {
                            $( ".ding4" ).toggle( "slow" );
                });
                $( ".click55" ).click(function() {
                            $( ".ding5" ).fadeIn(1400);
                });
                $( "#click6" ).click(function() {
                            $( ".ding" ).fadeIn(1400);
                });



                $(function(){
                           $("#click0 , .target0").click(function () {
                              $(".target0").text(function(i, text){
                                  return text === "Hide" ? "More info" : "Hide";
                              })
                           });
                        })
                        $(function(){
                           $("#click1 , .target1").click(function () {
                              $(".target1").text(function(i, text){
                                  return text === "Hide" ? "More info" : "Hide";
                              })
                           });
                        })
                        $(function(){
                           $("#click2 , .target2").click(function () {
                              $(".target2").text(function(i, text){
                                  return text === "Hide" ? "More info" : "Hide";
                              })
                           });
                        })
                        $(function(){
                           $("#click3 , .target3").click(function () {
                              $(".target3").text(function(i, text){
                                  return text === "Hide" ? "More info" : "Hide";
                              })
                           });
                        })
                        $(function(){
                           $("#click4 , .target4").click(function () {
                              $(".target4").text(function(i, text){
                                  return text === "Hide" ? "More info" : "Hide";
                              })
                           });
                   });












         });
