package server.Model;

/**
 * Created by hongy on 1/7/2017.
 */
public class PlayerModel{
    private float x, y, dirx, diry;
    private int id, hp;


    public float getX() {
        return x;
    }

    public void setX(float x) {
        this.x = x;
    }

    public float getY() {
        return y;
    }

    public void setY(float y) {
        this.y = y;
    }

    public float getDirx() {
        return dirx;
    }

    public void setDirx(float dirx) {
        this.dirx = dirx;
    }

    public float getDiry() {
        return diry;
    }

    public void setDiry(float diry) {
        this.diry = diry;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }
}
