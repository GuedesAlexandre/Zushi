<?php

namespace Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Contient
 *
 * @ORM\Table(name="contient", indexes={@ORM\Index(name="aliment_id", columns={"aliment_id"})})
 * @ORM\Entity
 * @apiResource()
 */
class Contient
{
    /**
     * @var int
     *
     * @ORM\Column(name="box_id", type="bigint", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $boxId;

    /**
     * @var string
     *
     * @ORM\Column(name="aliment_id", type="string", length=50, nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $alimentId;
}
