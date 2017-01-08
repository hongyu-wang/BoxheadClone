package server.Model;

import com.badlogic.gdx.utils.Json;
import com.badlogic.gdx.utils.JsonValue;
import com.badlogic.gdx.utils.JsonWriter;

/**
 *
 *
 * Created by hongy on 1/7/2017.
 */
public class ControlModel {
    private boolean up;
    private boolean down;
    private boolean left;
    private boolean right;
    private boolean space;


    public boolean isUp() {
        return up;
    }

    public void setUp(boolean up) {
        this.up = up;
    }

    public boolean isDown() {
        return down;
    }

    public void setDown(boolean down) {
        this.down = down;
    }

    public boolean isLeft() {
        return left;
    }

    public void setLeft(boolean left) {
        this.left = left;
    }

    public boolean isRight() {
        return right;
    }

    public void setRight(boolean right) {
        this.right = right;
    }

    public boolean isSpace() {
        return space;
    }

    public void setSpace(boolean space) {
        this.space = space;
    }
}
