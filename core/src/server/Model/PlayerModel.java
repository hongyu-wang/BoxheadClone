package server.Model;

/**
 * Created by hongy on 1/7/2017.
 */
public class PlayerModel{
    private float x, y, dirx, diry;
    private int hp, bulletCD, id;
    private boolean moving;

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


    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    public boolean isMoving() {
        return moving;
    }

    public void setMoving(boolean moving) {
        this.moving = moving;
    }

    public int getBulletCD() {
        return bulletCD;
    }

    public void setBulletCD(int bulletCD) {
        this.bulletCD = bulletCD;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
