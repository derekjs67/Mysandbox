 /*
var start = 25;
for (i = 0; i < 6; i++) {
    start += -25;
    console.log(start);

} */
/*function hi(name) {
    console.log("sup " + name + ", didn't see you there");
}

var name = prompt("who the hell are you?", "")

var friends = ["jimmy", "jhon", "billy", "bob"];
var places = ["peru", "colombia", "ecuador", "usa"];

function listArray(array) {
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}


var sign = prompt("the hell are you", "").toLowerCase();

switch (sign) {
    case "potato":
        alert("i like frenchfries");
        break;
    case "pizza":
        alert("mmm cheezy");
        break;
    default:
        alert("please enter something valid dude");
        break;

} */



/*for (i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            console.log("fizzbuzz");
        } else {
            console.log("fizz");
        }
    } else if (i % 5 === 0) {
        console.log("buzz");
    }  else {
        console.log(i);
    }
} */

var scenarios = ["at the hospital", "in the car", "at the gas station", "by the road"];
var people = ["carlos", "yohanna", "danielle", "austin", "joseph"];
var weaponsRight = ["garlic clove", "potato", "carrot", "cucumber", "tomato", "rotten severed foot"];
var weaponsLeft = ["knife", "spoon", "fork", "broken tea cup", "whiskey bottle"];


var storyTime = function () {
    function rNumber(a) {
        return Math.round(Math.random() * (a - 1));
    }
    var myThing = weaponsRight[rNumber(weaponsRight.length)];
    var myThing1 = weaponsLeft[rNumber(weaponsLeft.length)];
    var bleh = confirm("You are in a dark alley and suddenly hear a scream.\n Do you want to investigate?");
    if (bleh == true) {
        alert("You quickly enter the door where it came from. You are in a pitch black kitchen, it has a funny smell.");
        var choose = prompt("You hear footsteps nearby, and in a panic you:\n a) Turn the light on.\n b) Grab a weapon from your right.\n c) Grab a weapon from your left.\n(please enter the letter)").toLowerCase();
        switch (choose) {
            case "a":
                var crap = confirm("Oh crap! You see a dark silhouette of a figure with a creepy clown mask and what look like extremely long finger nails... He notices you. Do you:\n a) Turn off the light and pretend you didn't see anything.\n b) Run out the door and rush home.\n (a=ok b=cancel)");
                if (crap == true) {
                    alert("You turn the lights off as quickly as you can and stay very still... sweat drips from your forehead and your breathing becomes heavy, you notice every heart beat as it pounds in your chest, the 'funny smell' gets a lot stronger as you stand motionless");
                    var nty = confirm("As you hold your breath you hear the very faint sound of footsteps coming closer, and soon realize your stupid plan seems to have failed, do you:\n a) Stubbornly stay still and pretend it's all in your head.\n b) Say 'Whoops! this isn't the grocery store, I'll be on my way now'.\n (a=ok, b=cancel)");
                    if (nty == true) {
                        alert("As you hold your eyes shut as tightly as you can you hear the sound of his nails clacking together, not long after you feel them caressingly go from the base of your neck to your ear. The smell becomes pungent as you're able to identify what it is, extremely freaked out you open your eyes and all of a sudden he grasps your throat and star...(this has been omitted due to graphical content) ...untill you stop moving. Sorry dear.. you... have died");
                    } else { alert("you run away like the sissy you are"); }
                } else { alert("you run away like the sissy you are"); }
                break;
            case "b":
                var wep = confirm("You quickly pick up the first thing you find on your right, which happens to be a " + myThing + ". Knowing this has limited use, you:\n a) Walk towards the sounds and confront the 'thing'. \n b)  Leave with your stolen item. (a= ok b= cancel");
                if (wep == true) {
                    alert("You slowly walk deeper into the kitchen and are able to see the creature, it has what look like extremely long finger nails that clack as they graze each other. He notices you! You gather up your courage and attack him firmly grasping your " + myThing + ", as you attempt to stab him repeatedly your " + myThing + " disintegrates and liquids from it go everywhere, you then slip on the ground which is covered in your failed attempt to do something, you land on your back and all of a sudden he grasps your throat and star...(this has been omitted due to graphical content) ...untill you stop moving. Sorry dear.. you... have died");
                }
                else { alert("you run away like the sissy you are and hide with your " + myThing + "."); }
                break;

            case "c":
                var wep = confirm("You quickly pick up the first thing you find on your left, which happens to be a " + myThing1 + ". Knowing this has limited use, you:\n a) Walk towards the sounds and confront the 'thing'. \n b)  Leave with your stolen item.");
                if (wep == true) {
                    var qqq = confirm("You slowly walk deeper into the kitchen and are able to see the creature, it has what look like extremely long finger nails that clack as they graze each other. \n He notices you!\n do you:\n a) Gather up your courage and attack him firmly grasping your " + myThing1 + "\n b) Quickly find a place to hide in. \n (a= ok b= cancel)");
                    if (qqq == true) {
                        if ((Math.round(Math.random())) == 1) { alert("You charge at the thing with your " + myThing1 + " and skillfully gouge it's eye out, congratulations! you killed the creature... only to realize it was a random person in a costume. \n You are now a murderer.") }
                        else { alert("You charge at the creature with all your might! \n as soon as you get in to striking distance the creature swiftly rips your head off... sorry sunny.. you died.") }
                    } else { alert("I'm too tired, you'll probably die anyway") }
                } else { alert("you run away like the sissy you are and hide with your " + myThing1 + "."); }
                break;
            default:
                alert(" come on... do it right (make sure you ready everything and follow the instructions)");
        }

    } else {
        alert("you run away like the sissy you are");
    }
};
var soldier = {
    hp: 15,
    str: 5,
    accuracy: 2.5,
    evasion: 2
};
var rogue = {
    hp: 12,
    str: 3.5,
    accuracy: 3.25,
    evasion: 2.8
};
var monster = {
    hp: 20,
    str: 4.5,
    accuracy: 4,
    evasion: 2
};

var Maul = {
    dmg: 4,
    accuracy: 0.25,
    name: "Maul"
};
var Dagger = {
    dmg: 1.5,
    accuracy: 2,
    name: "Dagger"
};
var Sword = {
    dmg: 2.3,
    accuracy: 1.5,
    name: "Sword"
};
var Carrot = {
    dmg: -1.3,
    accuracy: -0.75,
    special: 18,
    name: "Carrot"
};
var weapon = [Maul, Dagger, Sword, Carrot];

function preReqs() {
    var fastSlow = prompt("Do you want to play the quick version or the slow version of the game? \n (a=fast, b=slow)", "").toLowerCase();

    if (fastSlow == "a" || fastSlow == "fast") {

        var character = prompt("What character would you like to use: \n a) Soldier: Has high hp and damage but medium evasion and accuracy.\n b) Rogue: Has regular hp and damage but decent evasion and accuracy.", "").toLowerCase();

        if (character == "a" || character == "soldier") {

            bHandler(soldier, monster);
        }

        else if (character == "b" || character == "rogue") {

                bHandler(rogue, monster);
            }
    }
    else if (fastSlow == "b" || fastSlow == "slow") {
        var character = prompt("What character would you like to use: \n a) Soldier: Has high hp and damage but medium evasion and accuracy.\n b) rogue: Has regular hp and damage but decent evasion and accuracy.", "").toLowerCase();

        if (character == "a" || character == "soldier") {

            Battle(soldier, monster);
        }

        else if (character == "b" || character == "rogue") {

            Battle(rogue, monster);
        }

    }

}

function whatWep() {
    var select = prompt("You have four weapons to choose from:\n a) Maul: Hits hard but is tough to swing. \n b) Dagger: Easy to land but does low damage. \n c) Sword: Pretty balanced 'just like your diet' \n d) Carrot: May have magical powers, who knows.").toLowerCase();

    if (select === "a" || select === "maul") {
        alert("you attack the monster with your maul");
        return 0;
    } else if (select === "b" || select == "dagger") {
        alert("you attack the monster with your dagger");
        return 1;
    } else if (select === "c" || select == "sword") {
        alert("you attack the monster with your sword");
        return 2;
    } else if (select === "d" || select == "carrot") {
        alert("you attack the monster with your carrot");
        return 3;
    }
}

function Battle(char, enemy) {

    var select = whatWep();

    var Cdmg = Math.round((Math.random() +0.1) * ((char.str + weapon[select].dmg)));
    var Ceva = Math.round(Math.random() * (char.evasion/2.5));
    var Cacu = Math.round(Math.random() * ((char.accuracy/1.8) + weapon[select].accuracy));
    var Edmg = Math.round((Math.random() +0.1) * enemy.str);
    var Eeva = Math.round(Math.random() * (enemy.evasion)/2.5);
    var Eacu = Math.round(Math.random() * (enemy.accuracy/1.5));
    if (Cacu > Eeva) {
        var Ehit = enemy.hp = enemy.hp - Cdmg;
        console.log("you hit the monster for " + Cdmg + " damage, he has " + Ehit + " HP remaining");
    } else {
        var Ehit = enemy.hp;
        console.log("you miss, the monster has " + Ehit + " HP remaining");
    } if (Eacu > Ceva) {
        var Chit = char.hp = char.hp - Edmg;
        console.log("the monster hits you for " + Edmg + " damage, you have " + Chit + " HP remaining");
    } else {
        var Chit = char.hp;
        console.log("you evade the monsters attack and have " + Chit + " Hp's left");
    } if (Chit <= 0) {
        alert("sorry sunny, you died");
    } else if (Ehit <= 0) {
        alert("congratulations!! you beat the monster and leveld up! \n Your HP has incresed by 2, Strength by 0.5 and evasion by 0.25");
    }
}
function bHandler(char, enemy) {
    var select = whatWep();
    var vary = setInterval(function () {
        if (fastBattle(char, enemy) === false) {
            clearInterval(vary);
        }
    }, 1500);
    function fastBattle(char, enemy) {
        // var select = 2;
        var Chit = char.hp, Ehit = enemy.hp;
        var Cdmg = Math.round((Math.random() + 0.1) * ((char.str + weapon[select].dmg)));
        var Ceva = Math.round(Math.random() * (char.evasion / 2.5));
        var Cacu = Math.round(Math.random() * ((char.accuracy / 1.8) + weapon[select].accuracy));
        var Edmg = Math.round((Math.random() + 0.1) * enemy.str);
        var Eeva = Math.round(Math.random() * (enemy.evasion) / 2.5);
        var Eacu = Math.round(Math.random() * (enemy.accuracy / 1.5));
        if (Cacu > Eeva) {
            console.log(" ");
            var Ehit = enemy.hp = enemy.hp - Cdmg;
            console.log("You swing your " + weapon[select].name + " and HIT " + Cdmg + " damage, he has " + Ehit + " HP remaining");
        } else {
            console.log(" ");
            var Ehit = enemy.hp;
            console.log("you miss, the monster has " + Ehit + " HP remaining");
        } if (Eacu > Ceva && Ehit > 0) {
            var Chit = char.hp = char.hp - Edmg;
            console.log("the monster hits you for " + Edmg + " damage, you have " + Chit + " HP remaining");
        } else {
            var Chit = char.hp;
            console.log("The monster misses, you have " + Chit + " Hp's left");
        } if (Chit <= 0) {
            alert("sorry sunny, you died");
            reset(char, enemy);
            console.log("\n\n\n\n");
            return false;
        } else if (Ehit <= 0) {
            alert("congratulations!! you beat the scrawny monster");
            reset(char, enemy);
            console.log("\n\n\n\n");
            return false;
        }

    }

}

function reset(char, enemy) {
    enemy.hp = 15;
    if (char == soldier) {
        char.hp = 15;
    }
    else {
        char.hp = 10;
    }

}
function sprite() {

    var c = document.getElementById("social").children;
    var cnc = "";
    var k = 0;
    for (i = 0; i < c.length; i++) {
        c[i].style.backgroundImage = "url('https://s13.postimg.org/hmqp1p1mv/89_Kjo_SN.jpg')";
        cnc = String(k) + "px 0px";
        c[i].addEventListener("mouseover", createHoverHandler(c[i], k, false));
        c[i].addEventListener("mouseout", createHoverHandler(c[i], k, true));
        k = k - 28;
        c[i].style.backgroundPosition = cnc;
    }
}

// Handler that will return a function to the addeventlistener
function createHoverHandler(cs, ksel, flagMouseOut) {
    return function () {
        spriteHover(cs, ksel, flagMouseOut);
    }
}

function spriteHover(cs, ksel, flagMouseOut) {
    var pnc = String(ksel) + "px -29px";
    cs.style.transition = ".75s";
    if (flagMouseOut) {
        pnc = String(ksel) + "px 0px";
    }
    cs.style.backgroundPosition = pnc;
}
//sprite(); <-- this is to set my social media sprite with Js

// this small thing controls the panels (main home)
$(".pnlBtn").on("click", function () {
    var panelId = $(this).attr("data-panel");
    $("#"+panelId).stop().fadeToggle(400);
})

// working on tabs down here (about us)

$(".tab-panels .tabs li").on("click", tab);
function tab() {
    var $location = $(this).closest(".tab-panels");
    var $panel = $(this).attr("rel");
    if (!$(this).hasClass("active")) {
        $($location).find(".tabs li.active").removeClass("active");
        $(this).addClass("active");

        $($location).find(".panel.active").stop().slideUp(300, panelShow);
    }

    function panelShow() {
        $(this).removeClass("active");
        $("#" + $panel).slideDown(300);
        $("#" + $panel).addClass("active");
    }

}

// working on slider (products)

//set interval
function scopeMope() {

    var interval;
    var width = 720;
    var animationSpeed = 1000;
    var stasis = 3000;
    var currentSlide = 1;
    var $slider = $(".slider");
    var $slideContainer = $slider.find(".slides");
    var $slideList = $($slideContainer).find(".slide");

    function stopSlider() {
        clearInterval(interval);
    }

    function startSlider() {
         interval = setInterval(function () {
            $($slideContainer).animate({ "margin-left": "-=" + width }, animationSpeed, function () {
                currentSlide++;
                if (currentSlide === $slideList.length) {
                    currentSlide = 1;
                    $slideContainer.css("margin-left", 0);
                }
            })
        }, stasis);
    }
    startSlider();
    $(".slider").on("mouseenter", stopSlider).on("mouseleave", startSlider);
}


scopeMope();

// using ajax and stuff
var $orders = $("#orders");
var $name = $("#name");
var $drink = $("#drink");
var orderTemplate = $("#order_template").html();
$.ajax({
    type: "GET",
    url: 'http://rest.learncode.academy/api/johnbob/friends',
    success: function (data) {
        $.each(data, function (i, item) {
            if (item.name && item.drink) {
                addOrder(item);
                $orders.children().css({ color: "green" });
            }
        });

    },
    error: function () {
        alert("something broke 'get'");
    }
});

$("#add_order").on("click", function () {
    var order = {
        name: $name.val(),
        drink: $drink.val()
    }

    if ($name.val() && $drink.val()) {
        $.ajax({
            type: "POST",
            url: 'http://rest.learncode.academy/api/johnbob/friends',
            data: order,
            success: function (newOrder) {
                addOrder(newOrder);
                $orders.children().css({ color: "green" });
            },
            error: function () { alert("something went wrong with post") }


        });
        clearVal($name);
        clearVal($drink);
    } else { alert("fill in both please");}
});

function clearVal(thing) {
    thing.val("");
}

function addOrder(order) {
    $orders.append(Mustache.render(orderTemplate, order));
}

$($orders).delegate(".remove", "click", function () {
    alert($(this).attr("rel"));
    var $li = $(this).closest("li");

    $.ajax({
        type: "DELETE",
        url: 'http://rest.learncode.academy/api/johnbob/friends' + "/" + $(this).attr("rel"),
        success: function () {
            $li.fadeOut(450);
        },
        error: function () {
            alert("error deleting");}
    })
});

$orders.delegate(".editOrder", "click", function () {
    var $li = $(this).closest("li");
    $li.addClass("edit");
    $li.find("input.name").val($li.find("span.name").html());
    $li.find("input.drink").val($li.find("span.drink").html());
});
$orders.delegate(".editCancel", "click", function () {
    var $li = $(this).closest("li");
    $li.removeClass("edit");

});
$orders.delegate(".editSave", "click", function () {
    var $li = $(this).closest("li");
    var order = {
        name: $li.find("input.name").val(),
        drink: $li.find("input.drink").val()
    };
    $.ajax({
        type: "PUT",
        url: 'http://rest.learncode.academy/api/johnbob/friends' + "/"+ $li.attr("rel"),
        data: order,
        success: function (newOrder) {
            $li.find("span.name").html(order.name);
            $li.find("span.drink").html(order.drink);
        },
        error: function () { alert("something went wrong while editing") }
    });
    $li.removeClass("edit");
});
$(document).ready(function () {
    function dlayHandler() {
        // pagination work

        //how much items per page to show
        var show_per_page = 5;
        //getting the amount of elements inside content div
        var number_of_items = $('#orders').children().length;
       // alert(number_of_items);
        //calculate the number of pages we are going to have
        var number_of_pages = Math.ceil(number_of_items / show_per_page);

        //set the value of our hidden input fields
        $('#current_page').val(0);
        $('#show_per_page').val(show_per_page);

        //now when we got all we need for the navigation let's make it '

        /*
        what are we going to have in the navigation?
            - link to previous page
            - links to specific pages
            - link to next page
        */
        var navigation_html = '<a class="previous_link" href="javascript:previous();">Prev</a>';
        var current_link = 0;
        while (number_of_pages > current_link) {
            navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link + ')" longdesc="' + current_link + '">' + (current_link + 1) + '</a>';
            current_link++;
        }
        navigation_html += '<a class="next_link" href="javascript:next();">Next</a>';

        $('#page_navigation').html(navigation_html);

        //add active_page class to the first page link
        $('#page_navigation .page_link:first').addClass('active_page');

        //hide all the elements inside content div
        $('#orders').children().css('display', 'none');

        //and show the first n (show_per_page) elements
        $('#orders').children().slice(0, show_per_page).css('display', 'block');

        //pagination functions that are needed

    }
    setTimeout(dlayHandler, 1009);
});

function previous() {

    new_page = parseInt($('#current_page').val()) - 1;
    //if there is an item before the current active link run the function
    if ($('.active_page').prev('.page_link').length == true) {
        go_to_page(new_page);
    }

}

function next() {
    new_page = parseInt($('#current_page').val()) + 1;
    //if there is an item after the current active link run the function
    if ($('.active_page').next('.page_link').length == true) {
        go_to_page(new_page);
    }

}
function go_to_page(page_num) {
    //get the number of items shown per page
    var show_per_page = parseInt($('#show_per_page').val());

    //get the element number where to start the slice from
    start_from = page_num * show_per_page;

    //get the element number where to end the slice
    end_on = start_from + show_per_page;

    //hide all children elements of content div, get specific items and show them
    $('#orders').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');

    /*get the page link that has longdesc attribute of the current page and add active_page class to it
    and remove that class from previously active page link*/
    $('.page_link[longdesc=' + page_num + ']').addClass('active_page').siblings('.active_page').removeClass('active_page');

    //update the current page input field
    $('#current_page').val(page_num);
}