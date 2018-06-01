package com.coinlab.common.error;

public class UnauthorizedException extends RuntimeException{
	private static final long serialVersionUID = -2238030302650813813L;
	
	public UnauthorizedException() {
		super("Your account permissions are invalid. Please sign in again.");   //���� ������ ��ȿ���� �ʽ��ϴ�.\\n�ٽ� �α����� ���ּ���.
	}
}
