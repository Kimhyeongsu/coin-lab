package com.coinlab.common.service;

import java.io.Serializable;
import java.util.List;

public interface CRUDService<T, ID extends Serializable> {

    List<T> findAll();
}
