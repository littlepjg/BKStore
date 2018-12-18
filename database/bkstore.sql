-- MySQL Script generated by MySQL Workbench
-- Sun Dec 16 09:53:33 2018
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema bkstore
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bkstore
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bkstore` DEFAULT CHARACTER SET utf8 ;
USE `bkstore` ;

-- -----------------------------------------------------
-- Table `bkstore`.`product_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bkstore`.`product_type` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `product_type_name` TEXT NULL DEFAULT NULL,
  `icon_image` TEXT NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bkstore`.`providers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bkstore`.`providers` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` TEXT NULL DEFAULT NULL,
  `logo` TEXT NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bkstore`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bkstore`.`products` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `product_name` VARCHAR(255) NOT NULL,
  `product_images` TEXT NULL DEFAULT NULL,
  `unit` VARCHAR(45) NOT NULL,
  `base_price` INT(11) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `quantity` INT(11) NULL DEFAULT NULL,
  `product_type_id` INT(11) NULL DEFAULT NULL,
  `provider_id` INT(11) NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `keySP_LSP_idx` (`product_type_id` ASC),
  INDEX `keySP_TH_idx` (`provider_id` ASC),
  CONSTRAINT `keySP_LSP`
    FOREIGN KEY (`product_type_id`)
    REFERENCES `bkstore`.`product_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `keySP_TH`
    FOREIGN KEY (`provider_id`)
    REFERENCES `bkstore`.`providers` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bkstore`.`category_attributes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bkstore`.`category_attributes` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bkstore`.`product_attributes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bkstore`.`product_attributes` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `product_type_id` INT(11) NOT NULL,
  `category_attribute_id` INT(11) NOT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `keyThuocTinhSP_LoaiSp_idx` (`product_type_id` ASC),
  INDEX `keyThuocTinhSP_DanhMucThuocTinh_idx` (`category_attribute_id` ASC),
  CONSTRAINT `keyThuocTinhSP_DanhMucThuocTinh`
    FOREIGN KEY (`category_attribute_id`)
    REFERENCES `bkstore`.`category_attributes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `keyThuocTinhSP_LoaiSp`
    FOREIGN KEY (`product_type_id`)
    REFERENCES `bkstore`.`product_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bkstore`.`attribute_values`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bkstore`.`attribute_values` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `product_id` INT(11) NOT NULL,
  `product_attribute_id` INT(11) NOT NULL,
  `value` TEXT NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `keyGTTT_SP_idx` (`product_id` ASC),
  INDEX `keyGTTT_TTSP_idx` (`product_attribute_id` ASC),
  CONSTRAINT `keyGTTT_SP`
    FOREIGN KEY (`product_id`)
    REFERENCES `bkstore`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `keyGTTT_TTSP`
    FOREIGN KEY (`product_attribute_id`)
    REFERENCES `bkstore`.`product_attributes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bkstore`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bkstore`.`comments` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `product_id` INT(11) NOT NULL,
  `user_id` INT(11) NOT NULL,
  `content` VARCHAR(145) NOT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `keyBinhLuan_Hang_idx` (`product_id` ASC),
  CONSTRAINT `keyBinhLuan_Hang`
    FOREIGN KEY (`product_id`)
    REFERENCES `bkstore`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bkstore`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bkstore`.`users` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NOT NULL,
  `passwd` TEXT NOT NULL,
  `phone_number` VARCHAR(255) NULL DEFAULT NULL,
  `address` TEXT NULL DEFAULT NULL,
  `level` INT NULL DEFAULT 1 COMMENT '1-khach hang, 2-nhan vien, 3-thu kho, 4-nhan vien giao hang.',
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bkstore`.`evaluations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bkstore`.`evaluations` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `product_id` INT(11) NOT NULL,
  `title` TEXT NULL DEFAULT NULL,
  `content` TEXT NULL DEFAULT NULL,
  `star_number` FLOAT NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `keyDanhGia_SanPham_idx` (`product_id` ASC),
  INDEX `keyDanhGia_KhachHang_idx` (`user_id` ASC),
  CONSTRAINT `keyDanhGia_KhachHang`
    FOREIGN KEY (`user_id`)
    REFERENCES `bkstore`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `keyDanhGia_SanPham`
    FOREIGN KEY (`product_id`)
    REFERENCES `bkstore`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bkstore`.`input_bills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bkstore`.`input_bills` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `created_date` DATETIME NULL DEFAULT NULL,
  `payment` INT(11) NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `keyHoaDonNhap_KhachHang_idx` (`user_id` ASC),
  CONSTRAINT `keyHoaDonNhap_KhachHang`
    FOREIGN KEY (`user_id`)
    REFERENCES `bkstore`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bkstore`.`input_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bkstore`.`input_details` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `input_bill_id` INT(11) NOT NULL,
  `product_id` INT(11) NOT NULL,
  `unit_price` INT(11) NULL DEFAULT NULL,
  `amount` INT(11) NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `keyChiTietNhap_Hang_idx` (`product_id` ASC),
  INDEX `keyChiTietNhap_HoaDonNhap` (`input_bill_id` ASC),
  CONSTRAINT `keyChiTietNhap_Hang`
    FOREIGN KEY (`product_id`)
    REFERENCES `bkstore`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `keyChiTietNhap_HoaDonNhap`
    FOREIGN KEY (`input_bill_id`)
    REFERENCES `bkstore`.`input_bills` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bkstore`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bkstore`.`posts` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `employee_id` INT(11) NULL DEFAULT NULL,
  `title` VARCHAR(255) NULL DEFAULT NULL,
  `content` TEXT NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `keyBaiDang_NhanVien_idx` (`employee_id` ASC),
  CONSTRAINT `keyBaiDang_NhanVien`
    FOREIGN KEY (`employee_id`)
    REFERENCES `bkstore`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bkstore`.`sale_bills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bkstore`.`sale_bills` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `customer_id` INT(11) NOT NULL,
  `shiper` INT(11) NOT NULL,
  `delivery_date` DATETIME NULL DEFAULT NULL,
  `book_date` DATETIME NOT NULL,
  `ship_fee` INT(11) NOT NULL,
  `status_order` INT(11) NULL DEFAULT NULL,
  `destination_address` TEXT NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `keyHoaDonBan_KhachHang_idx` (`customer_id` ASC),
  CONSTRAINT `keyHoaDonBan_KhachHang`
    FOREIGN KEY (`customer_id`)
    REFERENCES `bkstore`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `keyHoaDonBan_NVGiaoHang`
    FOREIGN KEY (`customer_id`)
    REFERENCES `bkstore`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bkstore`.`sale_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bkstore`.`sale_details` (
  `id` INT(11) NOT NULL,
  `product_id` INT(11) NOT NULL,
  `unit_price` INT(11) NOT NULL,
  `amount` INT(11) NOT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `product_id`),
  INDEX `keyChiTietBan_Hang_idx` (`product_id` ASC),
  CONSTRAINT `keyChiTietBan_Hang`
    FOREIGN KEY (`product_id`)
    REFERENCES `bkstore`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `keyChiTietBan_HoaDonBan`
    FOREIGN KEY (`id`)
    REFERENCES `bkstore`.`sale_bills` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `bkstore`.`cards`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bkstore`.`cards` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `amount` INT NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `key_card_user_idx` (`customer_id` ASC),
  INDEX `key_card_product_idx` (`product_id` ASC),
  CONSTRAINT `key_card_user`
    FOREIGN KEY (`customer_id`)
    REFERENCES `bkstore`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `key_card_product`
    FOREIGN KEY (`product_id`)
    REFERENCES `bkstore`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bkstore`.`favorites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bkstore`.`favorites` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `key_favorite_user_idx` (`customer_id` ASC),
  INDEX `key_favorite_product_idx` (`product_id` ASC),
  CONSTRAINT `key_favorite_user`
    FOREIGN KEY (`customer_id`)
    REFERENCES `bkstore`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `key_favorite_product`
    FOREIGN KEY (`product_id`)
    REFERENCES `bkstore`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bkstore`.`ratings`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bkstore`.`ratings` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` INT NULL,
  `product_id` INT NOT NULL,
  `value` FLOAT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `key_rating_product_idx` (`product_id` ASC),
  CONSTRAINT `key_rating_product`
    FOREIGN KEY (`product_id`)
    REFERENCES `bkstore`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
