package server.Model;

/**
 * Created by hongy on 1/7/2017.
 */
public class PlayerModel {
    private int hp;
    private int[] dir;
    private int[] pos;

    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    public int[] getDir() {
        return dir;
    }

    public void setDir(int[] dir) {
        this.dir = dir;
    }

    public int[] getPos() {
        return pos;
    }

    public void setPos(int[] pos) {
        this.pos = pos;
    }
}
