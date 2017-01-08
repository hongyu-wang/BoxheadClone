package com.mygdx.Actor;

import com.badlogic.gdx.scenes.scene2d.Actor;
import com.badlogic.gdx.utils.Json;

import java.util.ArrayList;

/**
 *
 * Created by hongy on 1/7/2017.
 */
public class Player  {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public static void main (String args []){
        Player person = new Player();
        person.setName("Nate");
        person.setAge(31);
        Json json = new Json();

        String model = json.toJson(person);


    }
}

