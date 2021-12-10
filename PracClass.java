package codingdojang01;

interface Calculator {
	
	
	void sum ();
	
	void minus ();
	
	void multiple ();
	
	public void division ();
	
}

class Measurement {
	
	public static int left;
	protected int right;
	
	void setNumber() {
		System.out.println("숫자설정하기");
	}
	void avg () {
		
	}
}

class Operation extends Measurement implements Calculator {
	
	
	void setNumber(int left, int right) {
		this.left = left;
		this.right = right;
	}
	
	@Override
	public void sum() {
		System.out.println(left+right);
	}
	
	@Override
	public void minus() {
		System.out.println(left-right);
	}

	@Override
	public void multiple() {
		System.out.println(left*right);
	}

	@Override
	public void division() {
		System.out.println(left/right);
	}
	
	void avg() {
		System.out.println((left+right)/2);
	}
	
	void remain() {
		System.out.println(left%right);
	}
	
}

public class PracClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Operation o1 = new Operation();
		
		o1.setNumber(32,50);
		o1.sum();
		o1.avg();
		o1.multiple();		
		o1.remain();
		
		Measurement.left = 40;
		o1.right = 30;
		o1.sum();
		o1.avg();
		o1.multiple();		
		o1.remain();
	}

}
